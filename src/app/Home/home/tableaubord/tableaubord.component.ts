import { Component, OnInit } from '@angular/core';
import {ChartType,ChartOptions} from'chart.js'
import { Label} from 'ng2-charts'
import * as pluginDataLabels from 'chartjs-plugin-datalabels'
import { from } from 'rxjs';
import {ChartDataSets} from 'chart.js'
import { DashbordService } from 'src/app/Services/dashbord.service';
@Component({
  selector: 'app-tableaubord',
  templateUrl: './tableaubord.component.html',
  styleUrls: ['./tableaubord.component.css']
})
export class TableaubordComponent implements OnInit {
pie:any;
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
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)','rgba(201,25,2,150)','rgba(255,0,255,0.3)','rgba(255,255,0,0.3)','rgba(0,0,255,0.9)','rgba(191,191,63,1)','rgba(63,189,191,1)','rgba(191,63,125,1)','rgba(225,151,125,1)','rgba(151,39,225,1)','rgba(39,225,222,1)','rgba(39,225,48,1)'],
    },
  ];

  constructor(public dash:DashbordService) { }

  ngOnInit() {
    this.dash.get_dashbord1().subscribe(
      (data)=>{this.pie=data
        console.log(data)
         this.pieChartLabels = ['Compensation','Conformité','Equipements Simulateurs & interfaces','Facturation','Gestion de compte','Gestion des autorisations','Gestion des flux','Gestion des transactions','Litiges','Publication, Consultations et Reporting','Risque & fraud management','Service chèques','Services ATM','Services cartes','formation']
         this.pieChartData  = [this.pie.Compensation, this.pie.Conformité,this.pie["Equipements, Simulateurs & interfaces"],this.pie['Facturation'],this.pie['Gestion de compte'],this.pie['Gestion des autorisations'],this.pie['Gestion des flux'],this.pie['Gestion des transactions'],this.pie['Litiges'],this.pie['Publication, Consultations et Reporting'],this.pie['Risque & fraud management'],this.pie['Service chèques'],this.pie['Services ATM'],this.pie['Services cartes'],this.pie['formation']]
       
        
      
      }

    )
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  changeLabels() {
    const words = ['hen', 'variable', 'embryo', 'instal', 'pleasant', 'physical', 'bomber', 'army', 'add', 'film',
      'conductor', 'comfortable', 'flourish', 'establish', 'circumstance', 'chimney', 'crack', 'hall', 'energy',
      'treat', 'window', 'shareholder', 'division', 'disk', 'temptation', 'chord', 'left', 'hospital', 'beef',
      'patrol', 'satisfied', 'academy', 'acceptance', 'ivory', 'aquarium', 'building', 'store', 'replace', 'language',
      'redeem', 'honest', 'intention', 'silk', 'opera', 'sleep', 'innocent', 'ignore', 'suite', 'applaud', 'funny'];
    const randomWord = () => words[Math.trunc(Math.random() * words.length)];
    this.pieChartLabels = Array.apply(null, { length: 3 }).map(_ => randomWord());
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

}
