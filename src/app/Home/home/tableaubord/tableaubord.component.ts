import { Component, OnInit } from '@angular/core';
import {ChartType,ChartOptions} from'chart.js'
import { Label} from 'ng2-charts'
import * as pluginDataLabels from 'chartjs-plugin-datalabels'
import { from } from 'rxjs';
import {ChartDataSets} from 'chart.js'
import { DashbordService } from 'src/app/Services/dashbord.service';
import { SrvsService } from 'src/app/Services/srvs.service';
@Component({
  selector: 'app-tableaubord',
  templateUrl: './tableaubord.component.html',
  styleUrls: ['./tableaubord.component.css']
})
export class TableaubordComponent implements OnInit {
  years:any[];
  mois:string
pie:any;
Annee:string
isAvailable:boolean=false
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels: Label[]=['Compensation','Conformité']
  public pieChartData: number[]=[300, 4000]
  public pieChartType: ChartType = 'pie';
  
         
  public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)','rgba(201,25,2,150)','rgba(255,0,255,0.3)','rgba(255,255,0,0.3)','rgba(0,0,255,0.9)','rgba(191,191,63,1)','rgba(63,189,191,1)','rgba(191,63,125,1)','rgba(225,151,125,1)','rgba(151,39,225,1)','rgba(39,225,222,1)','rgba(39,225,48,1)','rgba(136,182,235,1)','rgba(180,115,132,1)','rgba(154,115,180,1)','rgba(206,124,48,1)','rgba(30,107,97,1)','rgba(144,202,62,1)','rgba(252,202,62,1)','rgba(272,202,62,1)','rgba(211,202,62,1)','rgba(75,31,46,1)','rgba(222, 18, 181, 1)','rgba(18, 222, 181, 1)','rgba(131, 189, 15, 1)','rgba(189, 105, 15, 0.87)','rgba(189, 15, 15, 0.87)','rgba(72, 9, 113, 0.87)','rgba(227, 194, 250, 0.87)','rgba(7, 49, 85, 0.87)','rgba(230, 146, 246, 0.64)','rgba(86, 127, 10, 0.64)','rgba(45, 66, 5, 0.64)','rgba(62, 5, 66, 0.64)','rgba(5, 66, 14, 0.64)','rgba(76, 100, 240, 0.64)','rgba(155, 93, 39, 0.64)','rgba(98, 24, 83, 0.64)','rgba(149, 18, 9, 0.64)','rgba(63, 9, 149, 0.64)','rgba(149, 140, 9, 0.64)'],
    },
  ];

  constructor(public dash:DashbordService,public services:SrvsService) { }
 en(){
  
   console.log("ok")
 }
 class(){
  this.dash.get_dashbord1().subscribe(
    (data)=>{this.pie=data
      console.log(data)
       this.pieChartLabels = Object.getOwnPropertyNames(data);
       this.pieChartData=Object.values(data)
      
    
    }

  )


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
    this.dash.get_dashbord2().subscribe((data=>{
    console.log(data)
    this.pieChartLabels = Object.getOwnPropertyNames(data);
       this.pieChartData=Object.values(data)
    }))
  
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
  public ko(){
    console.log(this.mois)
    let a:string="ok"
    if(this.mois=="janvier"){
                
                console.log(a)
    }
    if(this.mois=="Février"){
      a="2"
}
if(this.mois=="Mars"){
  a="3"
}
if(this.mois=="Avril"){
  a="4"
}
if(this.mois=="Mai"){
  a="5"
}
if(this.mois=="Juin"){
  a="6"}
  if(this.mois=="Juillet"){
    a="7"}
    if(this.mois=="Aout"){
      a="7"}
      if(this.mois=="Septembre"){
        a="9"}
        if(this.mois=="Octobre"){
          a="10"}
          if(this.mois=="Novembre"){
            a="11"}
            if(this.mois=="Decembre"){
              a="12"}
 
    this.dash.post_dashbord(this.Annee,a).subscribe(
      data=>{
          console.log(Object.values(data))
          this.pieChartData=Object.values(data)
          console.log(Object.getOwnPropertyNames(data))
          this.pieChartLabels=Object.getOwnPropertyNames(data)
      }
    )
  }

}
