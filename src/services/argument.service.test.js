import { ErrorMessage } from "../entities/error-message.entity.js";
import { ArgumentService } from "./argument.service.js";
import { jest } from '@jest/globals';
import { DataProcess } from '../entities/data-process.entity.js';
import {ARGUMENT_EXPECTED_RESULTS_US01, ARGUMENT_EXPECTED_RESULTS_US02} from '../../test/services/argument.data.js';

describe('ArgumentService', () => {

    let mockDataProcess;
    let service;

    beforeEach(() => {
      // Create a new mock instance of DataProcess for each test
      mockDataProcess = new DataProcess();
    });
    it('should log an error message if an invalid flag is provided', () => {
      const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
      ArgumentService.processArguments(['--invalid']);
      expect(consoleLogSpy).toHaveBeenCalledWith(ErrorMessage.InvalidArguments);
      consoleLogSpy.mockRestore();
    });
  
    it('should handle the --filter flag with a pattern', () => {
      const consoleDirSpy = jest.spyOn(console, 'dir').mockImplementation();
      const processFilterByPatternMock = jest.fn().mockReturnValue(['filteredData1', 'filteredData2']);
      jest.spyOn(DataProcess.prototype, 'filterByPattern').mockImplementation(processFilterByPatternMock);
  
      ArgumentService.processArguments(['--filter=examplePattern']);
  
      expect(processFilterByPatternMock).toHaveBeenCalledWith('examplePattern');
      expect(consoleDirSpy).toHaveBeenCalledWith(['filteredData1', 'filteredData2'], { depth: null });
  
      consoleDirSpy.mockRestore();
    });

      it('should log an error message if no pattern is provided with --filter flag', () => {
        const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
        ArgumentService.processArguments(['--filter']);
        expect(consoleLogSpy).toHaveBeenCalledWith(ErrorMessage.NoPattern);
        consoleLogSpy.mockRestore();
      });
  
      it('should handle the --count flag', () => {
        const consoleDirSpy = jest.spyOn(console, 'dir').mockImplementation();
        const processCountCategoriesMock = jest.fn().mockReturnValue({ category1: 5, category2: 3 });
        jest.spyOn(DataProcess.prototype, 'countCategories').mockImplementation(processCountCategoriesMock);
    
        ArgumentService.processArguments(['--count']);
    
        expect(processCountCategoriesMock).toHaveBeenCalled();
        expect(consoleDirSpy).toHaveBeenCalledWith({ category1: 5, category2: 3 }, { depth: null });
    
        consoleDirSpy.mockRestore();
      });
  
    it('should log an error message if no arguments are provided', () => {
      const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
      ArgumentService.processArguments([]);
      expect(consoleLogSpy).toHaveBeenCalledWith(ErrorMessage.NoArgument);
      consoleLogSpy.mockRestore();
    });
  });