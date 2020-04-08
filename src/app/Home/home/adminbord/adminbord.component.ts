import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';
import {Popup} from 'ng2-opd-popup';

@Component({
  selector: 'app-adminbord',
  templateUrl: './adminbord.component.html',
  styleUrls: ['./adminbord.component.css']
})
export class AdminbordComponent implements OnInit {
  profil:string
  cr:boolean=false
  up:boolean=false
  user:string
  mdp:string
  id:string
 users:any[]
  constructor( public adminserive:AdminService,private popup:Popup) { }

  ngOnInit() {
    this.adminserive.get_users().subscribe(data=>{
       this.users=data
       console.log(data)
    })
  }
  supp(id){
    this.adminserive.delete(id).subscribe(data=>{console.log(data)
      this.adminserive.get_users().subscribe(data=>{
        this.users=data
     })
    })
  }

  show(){
    this.cr=true
  this.up=false
    this.popup.options = {
      
      header: "Detail",
      color: "#0275d8", // red, blue....
      widthProsentage: 30, // The with of the popou measured by browser width
      animationDuration: 1, // in seconds, 0 = no animation
      showButtons: false, // You can hide this in case you want to use custom buttons
      cancleBtnClass: "btn btn-default", // you class for styling the cancel button
      animation: "fadeInDown" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown'
  };
    this.popup.show(this.popup.options)
  }
  show2(user:any){
    this.cr=false
  this.up=true
    this.user=user.username
    this.profil=user.Profile
    this.mdp=user.password
    this.id=user.Id
    this.popup.options = {
      
      header: "Detail",
      color: "#0275d8", // red, blue....
      widthProsentage: 30, // The with of the popou measured by browser width
      animationDuration: 1, // in seconds, 0 = no animation
      showButtons: false, // You can hide this in case you want to use custom buttons
      cancleBtnClass: "btn btn-default", // you class for styling the cancel button
      animation: "fadeInDown" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown'
  };
    this.popup.show(this.popup.options)
  }

fermer(){
  this.popup.hide()
}
creer(){
  
  this.adminserive.create(this.user,this.profil,this.mdp).subscribe(data=>{
    console.log(data)
    this.adminserive.get_users().subscribe(data=>{
      this.users=data
    })
  })
}
update(){
  
  this.adminserive.update(this.user,this.mdp,this.profil,this.id).subscribe(data=>{
    console.log(this.profil)
    this.adminserive.get_users().subscribe(data=>{
      this.users=data
    })
  })
}

 
}

