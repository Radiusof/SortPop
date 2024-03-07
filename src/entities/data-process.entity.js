import {FilterService} from '../services/filter/filter.service.js';
import { CountService } from '../services/count/count.service.js';

export class DataProcess {
    constructor(data){
      this.data = data; 
      this.filterService = new FilterService();
      this.countService = new CountService();
    }
    filterByPattern(pattern) {
        return this.filterService.filterByPattern(this.data, pattern);
      }
    
    countCategories() {
        return this.countService.countCategories(this.data);
      }
}