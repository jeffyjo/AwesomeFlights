import { SearchFormValidators } from './search-form.validators';
import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators,
  FormControl } from '@angular/forms';



@Component({
  selector: 'search-form',
  styleUrls: ['./scss/search-form.scss'],
  templateUrl: './search-form.template.html'
})

export class SearchFormComponent implements OnInit {
  public searchForm: FormGroup;
  public oneWayOrReturn;

  constructor(fb: FormBuilder){
    this.searchForm = fb.group ( { 
      'destination': ['', [
        Validators.required,
        Validators.minLength(3),
        SearchFormValidators.getDestinationErrorWithNumbers()
        ]],
      'departure': ['', [
        Validators.required,
        Validators.minLength(3),
        SearchFormValidators.getDepartureErrorWithNumbers()
        ]],
      'dateOfDepature': ['', Validators.required],
      'numberOfPassengers': ['', Validators.required],
      'dateOfReturn': '',
      'time': ['', Validators.required],
      'oneWayOrReturn': ['true', Validators.required]
    })
  }

  public onSubmit(searchForm) : void {
    //console.log(searchForm);
    console.log(searchForm.value.oneWayOrReturn);
  }

    ngOnInit(){}
}

