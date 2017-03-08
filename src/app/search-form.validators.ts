import { FormControl } from '@angular/forms';

export class SearchFormValidators {
    static getDestinationError() {
        return function(control: FormControl){
            return true;
        }
    }
}