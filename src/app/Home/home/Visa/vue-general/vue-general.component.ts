import { Component, OnInit } from '@angular/core';
import { VisaService } from 'src/app/Services/visa.service';

@Component({
  selector: 'app-vue-general',
  templateUrl: './vue-general.component.html',
  styleUrls: ['./vue-general.component.css']
})
export class VueGeneralComponent implements OnInit {

  constructor( private Visaservices:VisaService) { }
  data:any
  
  ngOnInit() {
    this.Visaservices.getvuegenerale().subscribe(x=>{
      this.data=x
      console.log(x)
    })

  }

}
