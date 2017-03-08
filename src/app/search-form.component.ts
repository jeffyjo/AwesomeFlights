import { SearchFormValidators } from './search-form.validators';
import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators,
  FormControl } from '@angular/forms';



@Component({
  selector: 'search-form',
  styleUrls: ['./css/search-form.css'],
  templateUrl: './search-form.template.html'
})

export class SearchFormComponent implements OnInit {
  public searchForm: FormGroup;
  public oneWayOrReturn;

  constructor(fb: FormBuilder){
    this.searchForm = fb.group ( { 
      'destination': ['', [
        Validators.required,
        Validators.minLength(3)
        ]],
      'departure': ['', [
        Validators.required,
        Validators.minLength(3)
        ]],
      'dateOfDepature': ['', Validators.required],
      'dateOfReturn': '',
      'time': ['', Validators.required],
      'oneWayOrReturn': ['', Validators.required]
    })
  }

  public onSubmit(searchForm) : void {
    console.log(searchForm);
    //console.log(SearchFormValidators.getDestinationError());
  }

    ngOnInit(){}
}

