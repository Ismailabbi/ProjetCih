import { Component, OnInit } from '@angular/core';
import { VisaService } from 'src/app/Services/visa.service';

@Component({
  selector: 'app-litiges',
  templateUrl: './litiges.component.html',
  styleUrls: ['./litiges.component.css']
})
export class LitigesComponent implements OnInit {

  constructor( private Visaservices:VisaService) { }
 data:any
  ngOnInit() {
    this.Visaservices.getlitiges().subscribe(x=>{
      this.data=x
      console.log(x)
    })
  }

}
