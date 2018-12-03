import { chain, externalSchematic, Rule } from '@angular-devkit/schematics';
import * as path from 'path';

export default function(schema: any): Rule {
  return chain([
    externalSchematic('@nrwl/schematics', 'lib', {
      name: schema.name
    }),
    externalSchematic('@nrwl/schematics', 'ngrx', {
      name: schema.name,
      module: path.join(
        'libs',
        schema.name,
        'src',
        'lib',
        `${schema.name}.module.ts`
      )
    })
  ]);
}
