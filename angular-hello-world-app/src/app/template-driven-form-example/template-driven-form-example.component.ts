import { Component, OnInit } from '@angular/core';
//
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form-example',
  templateUrl: './template-driven-form-example.component.html',
  styleUrls: ['./template-driven-form-example.component.css']
})
export class TemplateDrivenFormExampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  formUser = {};

  onSubmit(form) {
    console.log('form values ', form);
  }

}
