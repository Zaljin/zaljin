import { SampleAction, SampleActionTypes } from './sample.actions';

export const SAMPLE_FEATURE_KEY = 'sample';

/**
 * Interface for the 'Sample' data used in
 *  - SampleState, and
 *  - sampleReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface SampleState {
  list: Entity[]; // list of Sample; analogous to a sql normalized table
  selectedId?: string | number; // which Sample record has been selected
  loaded: boolean; // has the Sample list been loaded
  error?: any; // last none error (if any)
}

export interface SamplePartialState {
  readonly [SAMPLE_FEATURE_KEY]: SampleState;
}

export const initialState: SampleState = {
  list: [],
  loaded: false
};

export function sampleReducer(
  state: SampleState = initialState,
  action: SampleAction
): SampleState {
  switch (action.type) {
    case SampleActionTypes.SampleLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
      break;
    }
  }
  return state;
}
