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
an:boolean=false
vi:boolean=false
vs:boolean=false
wo:boolean=false
wa:boolean=false

  

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }
  visa(){
    this.vs=!this.vs
  }
  avi(){
    this.vi=!this.vi
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
  arr(){
  this.an=!this.an
  }
refvisa(){
  this.wo=!this.wo
}
typevisa(){
  this.wa=!this.wa
}

}
