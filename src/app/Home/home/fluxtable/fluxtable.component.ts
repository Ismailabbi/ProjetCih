import { Component, OnInit } from '@angular/core';
import { FactureService } from 'src/app/Services/facture.service';
import {Popup} from 'ng2-opd-popup';

@Component({
  selector: 'app-fluxtable',
  templateUrl: './fluxtable.component.html',
  styleUrls: ['./fluxtable.component.css']
})
export class FluxtableComponent implements OnInit {
 flux:any[]
 factpop
 proportes
 values
  constructor( public factureService:FactureService,private popup:Popup) { }
  show(country:any){
    this.popup.options = {
      header: "Detail",
      color: "#f65900", // red, blue....
      widthProsentage: 80, // The with of the popou measured by browser width
      animationDuration: 1, // in seconds, 0 = no animation
      showButtons: false, // You can hide this in case you want to use custom buttons
      cancleBtnClass: "btn btn-default", // you class for styling the cancel button
      animation: "fadeInDown" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown'
  };
  this.popup.show(this.popup.options);
  this.factpop=country
  this.proportes=Object.getOwnPropertyNames(country)
  this.values=Object.values(country)
  console.log(this.values)


  }
  fermer(){
    this.popup.hide()
  }
  ngOnInit() {
    this.factureService.get_flux().subscribe(data=>{
      console.log(data)
      this.flux=data
    })
  }

}
