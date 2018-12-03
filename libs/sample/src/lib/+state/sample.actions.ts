import { Action } from '@ngrx/store';
import { Entity } from './sample.reducer';

export enum SampleActionTypes {
  LoadSample = '[Sample] Load Sample',
  SampleLoaded = '[Sample] Sample Loaded',
  SampleLoadError = '[Sample] Sample Load Error'
}

export class LoadSample implements Action {
  readonly type = SampleActionTypes.LoadSample;
}

export class SampleLoadError implements Action {
  readonly type = SampleActionTypes.SampleLoadError;
  constructor(public payload: any) {}
}

export class SampleLoaded implements Action {
  readonly type = SampleActionTypes.SampleLoaded;
  constructor(public payload: Entity[]) {}
}

export type SampleAction = LoadSample | SampleLoaded | SampleLoadError;

export const fromSampleActions = {
  LoadSample,
  SampleLoaded,
  SampleLoadError
};
