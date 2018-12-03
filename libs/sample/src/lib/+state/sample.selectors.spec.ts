import { Entity, SampleState } from './sample.reducer';
import { sampleQuery } from './sample.selectors';

describe('Sample Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getSampleId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createSample = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      sample: {
        list: [
          createSample('PRODUCT-AAA'),
          createSample('PRODUCT-BBB'),
          createSample('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('Sample Selectors', () => {
    it('getAllSample() should return the list of Sample', () => {
      const results = sampleQuery.getAllSample(storeState);
      const selId = getSampleId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedSample() should return the selected Entity', () => {
      const result = sampleQuery.getSelectedSample(storeState);
      const selId = getSampleId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = sampleQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = sampleQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
