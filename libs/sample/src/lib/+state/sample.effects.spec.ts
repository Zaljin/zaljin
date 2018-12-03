import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule } from '@nrwl/nx';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { SampleEffects } from './sample.effects';
import { LoadSample, SampleLoaded } from './sample.actions';

describe('SampleEffects', () => {
  let actions: Observable<any>;
  let effects: SampleEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        SampleEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(SampleEffects);
  });

  describe('loadSample$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadSample() });
      expect(effects.loadSample$).toBeObservable(
        hot('-a-|', { a: new SampleLoaded([]) })
      );
    });
  });
});
