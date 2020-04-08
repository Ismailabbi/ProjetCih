import { Component, OnInit } from '@angular/core';
import { VisaService } from 'src/app/Services/visa.service';

@Component({
  selector: 'app-typesde-transactions',
  templateUrl: './typesde-transactions.component.html',
  styleUrls: ['./typesde-transactions.component.css']
})
export class TypesdeTransactionsComponent implements OnInit {

  constructor( private Visaservices:VisaService) { }

data:any
  ngOnInit() {
    this.Visaservices.gettypesdetransaction().subscribe(x=>{
      this.data=x
      console.log(x)
    },y=>{console.log(y)})
  }

}
