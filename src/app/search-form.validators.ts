import { FormControl } from '@angular/forms';

export class SearchFormValidators {
    static getDestinationErrorWithNumbers() {
        return function(control: FormControl){
            //console.log(control.value);
            if(control.value.match('[0-9]')){
                return { 'destinationErrorWithNumbers': true};
            }
        }
    }

    static getDepartureErrorWithNumbers(){
        return function(control: FormControl){
            if(control.value.match('[0-9]')){
                console.log(control.value);
                return { 'departureErrorWithNumbers': true };
            }
        }
    }
}