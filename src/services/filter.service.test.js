import { FILTER_EXPECTED_RESULTS_US01, FILTER_EXPECTED_RESULTS_US02 } from '../../test/services/filter-expected-results.data';
import { FILTER_INPUT_DATA_US01, FILTER_INPUT_DATA_US02 } from '../../test/services/filter-input.data';
import { FilterService } from '../services/filter.service.js'; // Replace with the actual path

describe('FilterService', () => {
  describe('filterByPattern', () => {
    it('should filter the data based on the given pattern', () => {
      const filterService = new FilterService();
      const data = FILTER_INPUT_DATA_US01;
      const pattern = 'ry';

      const result = filterService.filterByPattern(data, pattern);

      expect(result).toEqual(FILTER_EXPECTED_RESULTS_US01);
    });

    it('should return an empty array if no data matches the pattern', () => {
      const filterService = new FilterService();
      const data = FILTER_INPUT_DATA_US02;
      const pattern = 'xyz';

      const result = filterService.filterByPattern(data, pattern);

      expect(result).toEqual(FILTER_EXPECTED_RESULTS_US02);
    });
  });
});