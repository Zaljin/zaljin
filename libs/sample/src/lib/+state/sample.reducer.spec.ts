import { SampleLoaded } from './sample.actions';
import {
  SampleState,
  Entity,
  initialState,
  sampleReducer
} from './sample.reducer';

describe('Sample Reducer', () => {
  const getSampleId = it => it['id'];
  let createSample;

  beforeEach(() => {
    createSample = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid Sample actions ', () => {
    it('should return set the list of known Sample', () => {
      const samples = [
        createSample('PRODUCT-AAA'),
        createSample('PRODUCT-zzz')
      ];
      const action = new SampleLoaded(samples);
      const result: SampleState = sampleReducer(initialState, action);
      const selId: string = getSampleId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = sampleReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
