import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../example.service';

@Component({
  selector: 'app-k194060852',
  templateUrl: './k194060852.component.html',
  styleUrls: ['./k194060852.component.css']
})
export class K194060852Component implements OnInit {
  products:any;
  constructor(private _service: ExampleService) { }

  ngOnInit(): void {
    // this._service.getProductList().subscribe({
      // next:(data)=>(this.products=data)
    // })
    this.products=this._service.getSampleProductData();
  }

}
