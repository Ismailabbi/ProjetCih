import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';
import {Popup} from 'ng2-opd-popup';

@Component({
  selector: 'app-adminbord',
  templateUrl: './adminbord.component.html',
  styleUrls: ['./adminbord.component.css']
})
export class AdminbordComponent implements OnInit {
 users:any[]
  constructor( public adminserive:AdminService,private popup:Popup) { }

  ngOnInit() {
    this.adminserive.get_users().subscribe(data=>{
       this.users=data
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
    this.popup.options = {
      header: "Detail",
      color: "#f65900", // red, blue....
      widthProsentage: 80, // The with of the popou measured by browser width
      animationDuration: 1, // in seconds, 0 = no animation
      showButtons: false, // You can hide this in case you want to use custom buttons
      cancleBtnClass: "btn btn-default", // you class for styling the cancel button
      animation: "fadeInDown" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown'
  };
    this.popup.show(this.popup.options)
  }

 
}

