import { Component, OnInit } from '@angular/core';
import {ChartType,ChartOptions} from'chart.js'
import { Label} from 'ng2-charts'
import * as pluginDataLabels from 'chartjs-plugin-datalabels'
import { from } from 'rxjs';
import {ChartDataSets} from 'chart.js'
import { DashbordService } from 'src/app/Services/dashbord.service';
import { SrvsService } from 'src/app/Services/srvs.service';
@Component({
  selector: 'app-dashbordprv',
  templateUrl: './dashbordprv.component.html',
  styleUrls: ['./dashbordprv.component.css']
})
export class DashbordprvComponent implements OnInit {

m:number=null
years:any[];
mois:string
pie:any;
Annee:any
isA:boolean=false
isAvailable:boolean=false
public pieChartOptions: ChartOptions = {
  responsive: true,
  legend: {
    position: 'left',
    display:true
  },
  
  plugins: {
    datalabels: {
      display: true,

      formatter: (value, ctx) => {
        const label = ctx.chart.data.labels[ctx.dataIndex];
        return label;
      },
    },
    outlabels: {
      display: true,
     },
  }
};
public pieChartLabels: Label[]=['Compensation','Conformité']
public pieChartData: number[]=[300, 4000]
public pieChartType: ChartType = 'pie';

       
public pieChartPlugins = [pluginDataLabels];
public pieChartColors = [
  {
    backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)','rgba(201,25,2,150)','rgba(255,0,255,0.3)','rgba(255,255,0,0.3)','rgba(0,0,255,0.9)','rgba(191,191,63,1)','rgba(63,189,191,1)','rgba(191,63,125,1)','rgba(225,151,125,1)','rgba(151,39,225,1)','rgba(39,225,222,1)','rgba(39,225,48,1)','rgba(136,182,235,1)','rgba(180,115,132,1)','rgba(154,115,180,1)','rgba(206,124,48,1)','rgba(30,107,97,1)','rgba(144,202,62,1)','rgba(252,202,62,1)','rgba(272,202,62,1)','rgba(211,202,62,1)','rgba(75,31,46,1)','rgba(222, 18, 181, 1)','rgba(18, 222, 181, 1)','rgba(131, 189, 15, 1)','rgba(189, 105, 15, 0.87)','rgba(189, 15, 15, 0.87)','rgba(72, 9, 113, 0.87)','rgba(227, 194, 250, 0.87)','rgba(7, 49, 85, 0.87)','rgba(230, 146, 246, 0.64)','rgba(86, 127, 10, 0.64)','rgba(45, 66, 5, 0.64)','rgba(62, 5, 66, 0.64)','rgba(5, 66, 14, 0.64)','rgba(76, 100, 240, 0.64)','rgba(155, 93, 39, 0.64)','rgba(98, 24, 83, 0.64)','rgba(149, 18, 9, 0.64)','rgba(63, 9, 149, 0.64)','rgba(149, 140, 9, 0.64)','rgba(182, 129, 113, 0.9)','rgba(109, 152, 113, 0.5)','rgba(59, 49, 113, 0.5)',' rgba(0, 119, 113, 0.5)','rgba(182, 119, 113, 0.2)','rgba(182, 72, 202, 0.2)',' rgba(3, 254, 13, 0.2)',' rgba(245, 57, 0, 0.5)',' rgba(245, 232, 0, 0.5)','rgba(245, 232, 252, 0.5)',' rgba(95, 232, 252, 0.5)',' rgba(255, 66, 252, 0.5)','rgba(255, 66, 35, 0.5)',' rgba(0, 212, 35, 0.5)','rgba(255, 57, 255, 0.5)','rgba(91, 91, 255, 0.5)','rgba(236, 238, 220, 0.5)','rgba(5, 238, 220, 0.5','rgba(214, 238, 220, 0.5)','rgba(51, 33, 61, 0.5)','rgba(248, 248, 127, 1)','rgba(198, 27, 196, 1)','rgba(198, 27, 18, 1)','rgba(115, 27, 236, 1)',' rgba(0, 119, 236, 1)','rgba(233, 200, 236, 1)',' rgba(0, 226, 123, 1)',' rgba(97, 107, 125, 1)','rgba(15, 39, 125, 1)',' rgba(0, 252, 204, 0.4)','rgba(250, 31, 238, 0.4)','rgba(163, 159, 238, 0.7)','rgba(255, 79, 0, 0.6)', 'rgba(200, 171, 155, 0.6)'],
  },
];

constructor(public dash:DashbordService,public services:SrvsService) { }
en(){

 console.log("ok")
}
class(){
this.dash.get_classffiable().subscribe(
  (data)=>{this.pie=data
    console.log(data)
     this.pieChartLabels = Object.getOwnPropertyNames(data);
     this.pieChartData=Object.values(data)
    
  
  }

)
this.pieChartOptions= {
  responsive: true,
  legend: {
    position: 'left',
    display:true
  },
  
  plugins: {
    datalabels: {
      display: true,

      formatter: (value, ctx) => {
        const label = ctx.chart.data.labels[ctx.dataIndex];
        return label;
      },
    },
    outlabels: {
      display: true,
     },
  }
};


}
ngOnInit() {
  this.dash.get_dashbord1().subscribe(
    (data)=>{this.pie=data
      console.log(data)
      this.pieChartLabels = Object.getOwnPropertyNames(data);
      this.pieChartData=Object.values(data)
      
    
    }

  )

  this.dash.get_year().subscribe(data=>{
    this.years=data
  })
}

// events
public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
  console.log(event, active);
}

public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
  console.log(event, active);
}

changeLabels() {
  this.dash.get_servicefiable().subscribe((data=>{
  console.log(data)
  this.pieChartLabels = Object.getOwnPropertyNames(data);
     this.pieChartData=Object.values(data)
  }))
  this.pieChartOptions= {
    responsive: true,
    legend: {
      position: 'bottom',
      display:true
      
    },
    
    plugins: {
      datalabels: {
        display: false,

        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
      outlabels: {
        display: true,
       },
    }
  };

}

addSlice() {
  this.pieChartLabels.push(['Line 1', 'Line 2', 'Line 3']);
  this.pieChartData.push(400);
  this.pieChartColors[0].backgroundColor.push('rgba(196,79,244,0.3)');
}

removeSlice() {
  this.pieChartLabels.pop();
  this.pieChartData.pop();
  this.pieChartColors[0].backgroundColor.pop();
}
public barChartOptions: ChartOptions = {
  responsive: true,
  // We use these empty structures as placeholders for dynamic theming.
  scales: { xAxes: [{}], yAxes: [{}] },
};
public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
public barChartType: ChartType = 'bar';
public barChartLegend = true;
public barChartData: ChartDataSets[] = [
  { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
];

public ok(){
  this.isAvailable=!this.isAvailable

}
public acceptance(){
  this.dash.get_accfiable().subscribe((data=>{
    console.log(data)
    this.pieChartLabels = Object.getOwnPropertyNames(data);
       this.pieChartData=Object.values(data)
    }))
    
}
public origin(){
  this.dash.get_originfiable().subscribe((data=>{
    console.log(data)
    this.pieChartLabels = Object.getOwnPropertyNames(data);
       this.pieChartData=Object.values(data)
    }))
}
public
public ko(){

  console.log(this.mois)
  
  if(this.mois=="Janvier"){
              this.m=1;
              
  }
  if(this.mois=="Février"){
    this.m=2
}
if(this.mois=="Mars"){
this.m=3
}
if(this.mois=="Avril"){
this.m=4
}
if(this.mois=="Mai"){
this.m=5
}
if(this.mois=="Juin"){
this.m=6
}
if(this.mois=="Juillet"){
this.m=7
}
if(this.mois=="Septembre"){
this.m=9
}
if(this.mois=="Octobre"){
this.m=10
}
if(this.mois=="Novembre"){
this.m=11
}
if(this.mois=="Decembre"){
this.m=11
}





  this.dash.post_dashbord(this.Annee,this.m).subscribe(
    data=>{
        console.log(Object.values(data))
        this.pieChartData=Object.values(data)
        console.log(Object.getOwnPropertyNames(data))
        this.pieChartLabels=Object.getOwnPropertyNames(data)
    }
  )
  this.pieChartOptions= {
    responsive: true,
    legend: {
      position: 'left',
      display:true
    },
    
    plugins: {
      datalabels: {
        display: false,

        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
      outlabels: {
        display: true,
       },
    }
  };
}
public fiableAcc(){
  console.log("salam")
  this.dash.get_accfiable().subscribe((data=>{
    
    console.log(Object.getOwnPropertyNames(data))
    this.pieChartLabels = Object.getOwnPropertyNames(data);
       this.pieChartData=Object.values(data)
    }))
}
public fiable(){
this.isA=!this.isA

}
public canal(){
 
}

fiableAccP(){
  this.dash.post_accepP(this.Annee,this.m).subscribe((data=>{
    console.log(data)
    this.pieChartLabels = Object.getOwnPropertyNames(data);
       this.pieChartData=Object.values(data)
    }))
}
originfiableP(){
  this.dash.post_originP(this.Annee,this.m).subscribe((data=>{
    console.log(data)
    this.pieChartLabels = Object.getOwnPropertyNames(data);
       this.pieChartData=Object.values(data)
    }))
}
public originfiable(){
  console.log("ok")
  this.dash.get_originfiable().subscribe((data=>{
    console.log(data)
    this.pieChartLabels = Object.getOwnPropertyNames(data);
       this.pieChartData=Object.values(data)
    }))
}
classfiableP(){
  this.dash.post_classificationP(this.Annee,this.m).subscribe((data=>{
    console.log(data)
    this.pieChartLabels = Object.getOwnPropertyNames(data);
       this.pieChartData=Object.values(data)
    }))
}
servicefiableP(){
  this.dash.post_serviceP(this.Annee,this.m).subscribe((data=>{
    console.log(data)
    this.pieChartLabels = Object.getOwnPropertyNames(data);
       this.pieChartData=Object.values(data)
    }))
}

}
