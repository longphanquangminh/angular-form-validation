import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { customValidator, passwordValidator } from '../validators/check.validator';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  // public regForm: FormGroup = new FormGroup({
  //   username: new FormControl('Nam Anh'),
  //   email: new FormControl('example@gmail.com'),
  //   pass: new FormControl(''),
  //   confirmPass: new FormControl(''),
  // });

  public regForm: any;
  numberRegEx = /^[0-9]+(\.?[0-9]+)?$/;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.regForm = this._formBuilder.group({
      productname: ['', [Validators.required]],
      productprice: [0, [Validators.required, Validators.pattern(this.numberRegEx)]]
      // ,
      // pass: [''],
      // confirmPass: ['']
    }
    // , {validators: [passwordValidator]}
    )
  }

  setDefaultValue(){
    this.regForm.patchValue({
      productname:"",
      productprice:0,
      // pass:"123",
      // confirmPass:"123"
    })
  }
  getValueFromInput(){
    
  }

  get productname(){
    return this.regForm.controls['productname']
  }
  

}
