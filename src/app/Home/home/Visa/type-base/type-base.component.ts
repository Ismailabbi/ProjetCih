import { Component, OnInit } from '@angular/core';
import { VisaService } from 'src/app/Services/visa.service';

@Component({
  selector: 'app-type-base',
  templateUrl: './type-base.component.html',
  styleUrls: ['./type-base.component.css']
})
export class TypeBaseComponent implements OnInit {
data:any
constructor( private Visaservices:VisaService) { }

  ngOnInit() {
    this.Visaservices.gettypebase().subscribe(x=>{
      console.log(x)
      this.data=x
    })
  }

}
