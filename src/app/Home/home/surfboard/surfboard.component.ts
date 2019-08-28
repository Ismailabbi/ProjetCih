import { Component, OnInit ,ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-surfboard',
  templateUrl: './surfboard.component.html',
  styleUrls: ['./surfboard.component.css']
})
export class SurfboardComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [
    { data: [169, 59.00015, 96.041, 150.781 , 237.27, 136.467, 74.203, 43.65, 19, 139.224, 238.925, 267.032], label: 'Litige' },
    { data: [379.3264, 53.445, 162.834, 19, 26.6667, 247.3334, 73.56, 140.7666, 12.445, 699, 140.99, 81.046], label: 'Risque & fraud management' },
    { data: [84.6890, 36.1897, 156.806, 12.231, 15.899, 170.233, 36.332, 32.63, 31.333, 140.795, 128.443, 161.186], label: 'Gestion des autorisations' },
    { data: [169.366, 42.3452, 82.869, 32.8364, 38.224, 240.663, 70.666, 20.21, 16.399, 105.868, 181.432, 182.352], label: 'Facturation' },
    { data: [79.6, 40.333, 200.551, 67.3748, 17.4893, 20.773, 46.4421, 33.136, 28.366, 228.442, 221.946, 259.574], label: 'Gestion de compte' }, 
    { data: [356.15, 59.1136, 104.144, 42.4873, 13.8935, 98.732, 79.4664, 176.321, 89.7566, 228.442, 118.959, 162.322], label: 'Services ATM' },
	{ data: [196.436, 113.47, 259.4, 102.4242, 11.3784, 63.8432, 13.441, 66.321, 71.6805, 147.37, 136.316, 225.902], label: 'Gestion des transactions' },
	{ data: [236.1211, 317.694, 176.81, 132.9734, 32.179642, 33.3332, 24.115, 74.6653, 217.972 , 73.185, 143.448], label: 'Compensation' },
	{ data: [142.8140223, 10.333, 31.736, 19, 14.983, 8.1112, 68.364, 109.4651, 114.918 , 133.735, 94.496, 122.914], label: 'Equipements, Simulateurs & interfaces' },
	{ data: [179.3264, 64.110, 191.264, 19, 20.2727, 54.10, 190.7411, 223.6661, 119.111 , 161.054, 160.885, 233.384], label: 'Gestion des flux' },
	{ data: [25.3333, 17.633, 189.129, 19, 12.3389, 94.23, 136.744, 189.63, 158.51, 201.018, 193.849, 24.148], label: 'Publication, Consultations et Reporting' },
	{ data: [139.9664, 265.1151, 235.678, 19, 22.2321, 15, 86.4445, 36.433, 254.441 , 47.806, 192.78, 204.781], label: 'formation' },
  ];
  public lineChartLabels: Label[] = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre'];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    plugins: {
      datalabels: {
        display: false,
  
       
      },
      outlabels: {
        display: true,
       },
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
       
      ]
    },
    annotation: {
      
    },
  };
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [pluginAnnotations];

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  constructor() { }

  ngOnInit() {
  }

  public randomize(): void {
    for (let i = 0; i < this.lineChartData.length; i++) {
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        this.lineChartData[i].data[j] = this.generateNumber(i);
      }
    }
    this.chart.update();
  }

  private generateNumber(i: number) {
    return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public hideOne() {
    const isHidden = this.chart.isDatasetHidden(1);
    this.chart.hideDataset(1, !isHidden);
  }

  public pushOne() {
    this.lineChartData.forEach((x, i) => {
      const num = this.generateNumber(i);
      const data: number[] = x.data as number[];
      data.push(num);
    });
    this.lineChartLabels.push(`Label ${this.lineChartLabels.length}`);
  }

  public changeColor() {
    this.lineChartColors[2].borderColor = 'green';
    this.lineChartColors[2].backgroundColor = `rgba(0, 255, 0, 0.3)`;
  }

  public changeLabel() {
    this.lineChartLabels[2] = ['1st Line', '2nd Line'];
    // this.chart.update();
  }

}
