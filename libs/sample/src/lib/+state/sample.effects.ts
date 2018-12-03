import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { SamplePartialState } from './sample.reducer';
import {
  LoadSample,
  SampleLoaded,
  SampleLoadError,
  SampleActionTypes
} from './sample.actions';

@Injectable()
export class SampleEffects {
  @Effect()
  loadSample$ = this.dataPersistence.fetch(SampleActionTypes.LoadSample, {
    run: (action: LoadSample, state: SamplePartialState) => {
      // Your custom REST 'load' logic goes here. For now just return an empty list...
      return new SampleLoaded([]);
    },

    onError: (action: LoadSample, error) => {
      console.error('Error', error);
      return new SampleLoadError(error);
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<SamplePartialState>
  ) {}
}
