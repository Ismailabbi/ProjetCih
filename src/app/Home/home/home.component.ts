import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 ab:boolean=false
 at:boolean=false
ak:boolean=false
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }
  aks(){
   this.ab=!this.ab
    
  }
  ass(){
    this.at=!this.at
  }
  add(){
    this.ak=!this.ak
  }

}
