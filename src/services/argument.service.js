import {DataProcess} from '../entities/data-process.entity.js';
import {data} from '../core/config/data.js';
import { ErrorMessage } from '../entities/error-message.entity.js';

/**
* Processes the command-line arguments and performs data operations based on the provided flags and patterns.
* @param {string} args - The string of command-line arguments.
*/
export class ArgumentService {
    static processArguments(args) {
        if (args.length === 0) {
            console.log(ErrorMessage.NoArgument);
            return;
          }
        const [flagWithSign, pattern] = args[0]?.split('=');
        const flag = flagWithSign.startsWith('--') ? flagWithSign : null;
        const process = new DataProcess(data);

        if (flag === '--filter') {
            if (!pattern) {
            console.log(ErrorMessage.NoPattern);
            return;
            }
            const filteredData = process.filterByPattern(pattern);
            console.dir(filteredData, { depth: null });
            return;
        }
    
        if (flag === '--count') {
            const counts = process.countCategories();
            console.dir(counts, { depth: null });
            return;
        }

        console.log(ErrorMessage.InvalidArguments);
        return;
    }
}