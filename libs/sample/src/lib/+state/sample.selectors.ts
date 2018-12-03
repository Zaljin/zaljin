import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SampleState } from './sample.reducer';

// Lookup the 'Sample' feature state managed by NgRx
const getSampleState = createFeatureSelector<SampleState>('sample');

const getLoaded = createSelector(
  getSampleState,
  (state: SampleState) => state.loaded
);
const getError = createSelector(
  getSampleState,
  (state: SampleState) => state.error
);

const getAllSample = createSelector(
  getSampleState,
  getLoaded,
  (state: SampleState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getSampleState,
  (state: SampleState) => state.selectedId
);
const getSelectedSample = createSelector(
  getAllSample,
  getSelectedId,
  (sample, id) => {
    const result = sample.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const sampleQuery = {
  getLoaded,
  getError,
  getAllSample,
  getSelectedSample
};
