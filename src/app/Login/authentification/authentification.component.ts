import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
name:string
logine:string
a:boolean=false
  constructor(public router: Router) { }
 login(){
   if(this.name!="admin"){
  this.a=true
   }
   else{
     if(this.logine!="effyis1234"){
 this.a=true
     }
     else{
      this.router.navigate(['/home']);
     }
   }
 }
  ngOnInit() {
  }

}
