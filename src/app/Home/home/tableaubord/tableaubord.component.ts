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
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)','rgba(201,25,2,150)','rgba(255,0,255,0.3)','rgba(255,255,0,0.3)','rgba(0,0,255,0.9)','rgba(191,191,63,1)','rgba(63,189,191,1)','rgba(191,63,125,1)','rgba(225,151,125,1)','rgba(151,39,225,1)','rgba(39,225,222,1)','rgba(39,225,48,1)','rgba(136,182,235,1)','rgba(180,115,132,1)','rgba(154,115,180,1)','rgba(206,124,48,1)','rgba(30,107,97,1)','rgba(144,202,62,1)','rgba(252,202,62,1)','rgba(272,202,62,1)','rgba(211,202,62,1)','rgba(75,31,46,1)'],
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
       this.pieChartLabels = ['Compensation','Conformité','Equipements Simulateurs & interfaces','Facturation','Gestion de compte','Gestion des autorisations','Gestion des flux','Gestion des transactions','Litiges','Publication, Consultations et Reporting','Risque & fraud management','Service chèques','Services ATM','Services cartes','formation']
       this.pieChartData  = [this.pie.Compensation, this.pie.Conformité,this.pie["Equipements, Simulateurs & interfaces"],this.pie['Facturation'],this.pie['Gestion de compte'],this.pie['Gestion des autorisations'],this.pie['Gestion des flux'],this.pie['Gestion des transactions'],this.pie['Litiges'],this.pie['Publication, Consultations et Reporting'],this.pie['Risque & fraud management'],this.pie['Service chèques'],this.pie['Services ATM'],this.pie['Services cartes'],this.pie['formation']]
     
      
    
    }

  )


 }
  ngOnInit() {
    this.dash.get_dashbord1().subscribe(
      (data)=>{this.pie=data
        console.log(data)
      
         this.pieChartLabels = ['Compensation','Conformité','Equipements Simulateurs & interfaces','Facturation','Gestion de compte','Gestion des autorisations','Gestion des flux','Gestion des transactions','Litiges','Publication, Consultations et Reporting','Risque & fraud management','Service chèques','Services ATM','Services cartes','formation']
         this.pieChartData  = [this.pie.Compensation, this.pie.Conformité,this.pie["Equipements, Simulateurs & interfaces"],this.pie['Facturation'],this.pie['Gestion de compte'],this.pie['Gestion des autorisations'],this.pie['Gestion des flux'],this.pie['Gestion des transactions'],this.pie['Litiges'],this.pie['Publication, Consultations et Reporting'],this.pie['Risque & fraud management'],this.pie['Service chèques'],this.pie['Services ATM'],this.pie['Services cartes'],this.pie['formation']]
       
        
      
      }

    )

    this.dash.get_year().subscribe(data=>{console.log(data)})
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
    this.pieChartLabels=['ATM Acquirer Switch Fees','ATM Locator Internet','Account Management System (AMS)','Acquirer Assessment','Acquirer Authorization','Acquirer Call Referral','Acquirer Cross-Border','Acquirer Debit ATM','Acquirer Debit POS','Acquirer Decision Management Services','Acquirer Money Transfer','Acquirer On-Behalf' ,'Acquirer Processing Integrity','Anti-Money Laundering,Assessment Noncompliance','Cardholder','Solutions','Cirrus','Cirrus Billing','Clearing Fees Issuer','Clearing Incoming','Clearing Issuer Transaction','Clearing Outgoing']
    this.pieChartData=[data['ATM Acquirer Switch Fees'], data['ATM Locator Internet'],data['Account Management System (AMS)'],data['Acquirer Assessment'],data['Acquirer Authorization'],data['Acquirer Call Referral'],data['Acquirer Cross-Border'],data['Acquirer Debit ATM'],data['Acquirer Debit POS'],data['Acquirer Decision Management Services'],data['Acquirer Money Transfer'],data['Acquirer On-Behalf Service'],data['Acquirer Processing Integrity'],data['Anti-Money Laundering'],data['Assessment Noncompliance'],data['Cardholder'],data['Solutions'],data['Cirrus'],data['Cirrus Billing'],data['Clearing 1740 Miscellaneous Collection'],data['Clearing Fees Issuer'],data['Clearing Incoming'],data['Clearing Issuer Transaction'],data['Clearing Outgoing']]

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
    this.dash.post_dashbord(this.Annee)
  }

}
