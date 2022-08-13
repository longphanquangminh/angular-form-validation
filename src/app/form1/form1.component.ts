import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  courses:any[]=["Angular", "Python", "Ruby", "Golang"]
  // studentModel=new Student("Nam Anh","anh@gmail.com","0909090909", "none", "sang");
  studentModel=new Student("","","", "none", "sang");
  errFlag=false;
  constructor() { }

  ngOnInit(): void {
  }
  validateCourse(value:any){
    if (value == 'none'){
      this.errFlag=true;
    }else{
      this.errFlag=false;
    }
  }
}
