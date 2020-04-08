import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MontantserviceService} from '../../../Services/montantservice.service'
  import { from } from 'rxjs';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
Mastermontant:string
nombrefacture:string
visamontant:string
nombrefacturevisa:string
  constructor(private router: Router,private servicemontant:MontantserviceService) { }

  ngOnInit() {
 this.servicemontant.getinfoMc().subscribe( (data)=>{
 this.Mastermontant=data[0]['Total']
 this.nombrefacture=data[0]['Facture']
   }
 )
this.servicemontant.getinfoVs().subscribe(data=>{
  this.visamontant=data[0]['Total']
  this.nombrefacturevisa=data[0]['Facture']
})
  }

}
