import { Component, OnInit } from '@angular/core';
//
import { FormsModule } from '@angular/forms';
//
import { addressModel } from 'src/app/data/address.model';  

@Component({
  selector: 'app-template-driven-form-example',
  templateUrl: './template-driven-form-example.component.html',
  styleUrls: ['./template-driven-form-example.component.css']
})
export class TemplateDrivenFormExampleComponent implements OnInit {

  //Form object definition
  model: addressModel = {  
    address: '',  
    city: '',  
    state:'',  
    postcode: null,  
    country: null,  
    aggrement: false  
  };  

  constructor() { }

  ngOnInit() {
  }

  formUser = {};

  onSubmit(form) {
    console.log('form values ', form);
  }

  //
  countryData: any[] = ['India', 'US', 'UK'];  

}
