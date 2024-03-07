import { CountService } from '../services/count.service.js';
import * as DATA from '../../test/services/count-input.data.js';
import {COUNT_EXPECTED_RESULTS_US01} from '../../test/services/count-expected-results.data.js'
describe('CountService', () => {
  describe('countCategories', () => {
    it('should count categories and append counts to the names of items and people', () => {
      const countService = new CountService();
      const data = DATA.DATA_INPUT_COUNT_ES01 ;

      const result = countService.countCategories(data);

      expect(result).toEqual(COUNT_EXPECTED_RESULTS_US01);
    });
  });

  describe('countChildren', () => {
    it('should count the number of children for a given item with people', () => {
      const countService = new CountService();
      const itemWithPeople =  DATA.DATA_INPUT_COUNT_ES02 ;

      const result = countService.countChildren(itemWithPeople);

      expect(result).toBe(2);
    });

    it('should count the number of children for a given item with animals', () => {
      const countService = new CountService();
      const itemWithAnimals =  DATA.DATA_INPUT_COUNT_ES03;

      const result = countService.countChildren(itemWithAnimals);

      expect(result).toBe(3);
    });

    it('should return 0 for an item with no children', () => {
      const countService = new CountService();
      const itemWithNoChildren =  DATA.DATA_INPUT_COUNT_ES04;

      const result = countService.countChildren(itemWithNoChildren);

      expect(result).toBe(0);
    });
  });
});