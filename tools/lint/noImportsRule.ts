import * as ts from 'typescript';
import * as Lint from 'tslint';
import { NgWalker } from 'codelyzer/angular/ngWalker';

export class Rule extends Lint.Rules.AbstractRule {
  static readonly metadata: Lint.IRuleMetadata = {
    description:
      'Classes decorated with @Directive must have suffix "Directive" (or custom) in their name.',
    descriptionDetails:
      'See more at https://angular.io/styleguide#style-02-03.',
    optionExamples: [true, [true, 'Directive', 'MySuffix']],
    options: {
      items: {
        type: 'string'
      },
      minLength: 0,
      type: 'array'
    },
    optionsDescription:
      'Supply a list of allowed component suffixes. Defaults to "Directive".',
    rationale:
      'Consistent conventions make it easy to quickly identify and reference assets of different types.',
    ruleName: 'directive-class-suffix',
    type: 'style',
    typescriptOnly: true
  };

  static readonly FAILURE_STRING =
    'The name of the class %s should end with the suffix %s (https://angular.io/styleguide#style-02-03)';

  static validate(className: string, suffixes: string[]): boolean {
    return suffixes.some(s => className.endsWith(s));
  }

  apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
    return this.applyWithWalker(
      new NoImportsWalker(sourceFile, this.getOptions())
    );
  }
}

export class NoImportsWalker extends NgWalker {
  protected visitNgDirective(metadata: any) {
    const name = metadata.controller.name!;
    const className = name.text;
    const options = this.getOptions();
    const suffixes: string[] = options.length ? options : ['Directive'];
    const { heritageClauses } = metadata.controller;

    if (heritageClauses) {
      const i = heritageClauses.filter(
        h => h.token === ts.SyntaxKind.ImplementsKeyword
      );
    }

    if (!Rule.validate(className, suffixes)) {
      this.addFailureAtNode(name, '');
    }

    super.visitNgDirective(metadata);
  }
}
