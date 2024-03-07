import { ArgumentService } from './services/argument/argument.service.js';
// Read command-line arguments
// Remove the first two elements from the command-line 
const args = process.argv.slice(2);

// Call the processArguments method from the ArgumentService
ArgumentService.processArguments(args);