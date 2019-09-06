import { Component, OnInit ,ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import { DashbordService } from 'src/app/Services/dashbord.service';

@Component({
  selector: 'app-surfboard',
  templateUrl: './surfboard.component.html',
  styleUrls: ['./surfboard.component.css']
})
export class SurfboardComponent implements OnInit {
  public a: ChartDataSets={}
  isDataAvailable:boolean = false;
  date=2018
  wait:boolean=true
  choix:string;
  public lineChartData: ChartDataSets[] = [];
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

  @ViewChild(BaseChartDirective, { static:false }) chart: BaseChartDirective;

  constructor(public dash:DashbordService) { }
  forceChartRefresh() {
    setTimeout(() => {
      this.chart.refresh();
    }, 10);
  }
  ngOnInit() {
   
      this.dash.post_surfaceclassification(this.date).subscribe(data=>{
        let a:Array<any>=Object.values(data)
        let labels:string[]=[]
       
        a.forEach(s=>{
          labels.push(s.Classification)
        })
        let labelss:string[]=[]
       let n:string
          for(let i=0 ;i<labels.length;i++){
            if(i==0){
              n=labels[i]
           labelss.push(n)
            }
            else{
              if(labels[i]==n){}
              else{
                n=labels[i]
                labelss.push(n)
              }
            }
          }
         
          for(let i=0 ;i<labelss.length;i++){
          let  d: ChartDataSets={}
          d.label=labelss[i]
          d.data=[0,0,0,0,0,0,0,0,0,0,0,0]
      
          for(let j=0;j<a.length;j++){
            if(labelss[i]==a[j].Classification){
              let m=a[j].month
              let mf:number=+m
               
              d.data[mf-1]=+a[j].TotalCharge
              
            }
            
          }
            this.lineChartData.push(d)
          }
          this.wait=false
          this.isDataAvailable=true      

        
        
      })



 








    
        
      
      
    
        
        }
        origin(){
          this.choix='o'
          this.wait=true
          this.lineChartData=[]
       this.isDataAvailable=false
                this.dash.post_surfaceceOrigin(this.date).subscribe(data=>{
                  console.log(data)
                  let a:Array<any>=Object.values(data)
                  let labels:string[]=[]
                 
                  a.forEach(s=>{
                    labels.push(s.Origine)
                  })
                  let labelss:string[]=[]
                 let n:string
                    for(let i=0 ;i<labels.length;i++){
                      if(i==0){
                        n=labels[i]
                     labelss.push(n)
                      }
                      else{
                        if(labels[i]==n){}
                        else{
                          n=labels[i]
                          labelss.push(n)
                        }
                      }
                    }
                   
                    for(let i=0 ;i<labelss.length;i++){
                    let  d: ChartDataSets={}
                    d.label=labelss[i]
                    d.data=[0,0,0,0,0,0,0,0,0,0,0,0]
                
                    for(let j=0;j<a.length;j++){
                      if(labelss[i]==a[j].Origine){
                        let m=a[j].month
                        let mf:number=+m
                         
                        d.data[mf-1]=+a[j].TotalCharge
                      }
                      
                    }
                    console.log(d)
                      this.lineChartData.push(d)
                    }
                    console.log(this.lineChartData)
                    this.isDataAvailable=true      
          
                  
                  
                })


        }
      
        acceptancesurf(){
          this.choix='a'
          this.wait=true
    this.lineChartData=[]
 this.isDataAvailable=false
          this.dash.post_surfacecAcceptance(this.date).subscribe(data=>{
            console.log(data)
            let a:Array<any>=Object.values(data)
            let labels:string[]=[]
           
            a.forEach(s=>{
              labels.push(s.Acceptance)
            })
            let labelss:string[]=[]
           let n:string
              for(let i=0 ;i<labels.length;i++){
                if(i==0){
                  n=labels[i]
               labelss.push(n)
                }
                else{
                  if(labels[i]==n){}
                  else{
                    n=labels[i]
                    labelss.push(n)
                  }
                }
              }
             
              for(let i=0 ;i<labelss.length;i++){
              let  d: ChartDataSets={}
              d.label=labelss[i]
              d.data=[0,0,0,0,0,0,0,0,0,0,0,0]
          
              for(let j=0;j<a.length;j++){
                if(labelss[i]==a[j].Acceptance){
                  let m=a[j].month
                  let mf:number=+m
                   
                  d.data[mf-1]=+a[j].TotalCharge
                }
                
              }
              console.log(d)
                this.lineChartData.push(d)
              }
              console.log(this.lineChartData)
              this.isDataAvailable=true      
    
            
            
          })
          
        }
        
  
  

  ok(){
    this.choix="c"
     this.wait=true
    this.lineChartData=[]
 this.isDataAvailable=false
    this.dash.post_surfaceclassification(this.date).subscribe(data=>{
      let a:Array<any>=Object.values(data)
      let labels:string[]=[]
     
      a.forEach(s=>{
        labels.push(s.Classification)
      })
      let labelss:string[]=[]
     let n:string
        for(let i=0 ;i<labels.length;i++){
          if(i==0){
            n=labels[i]
         labelss.push(n)
          }
          else{
            if(labels[i]==n){}
            else{
              n=labels[i]
              labelss.push(n)
            }
          }
        }
       
        for(let i=0 ;i<labelss.length;i++){
        let  d: ChartDataSets={}
        d.label=labelss[i]
        d.data=[0,0,0,0,0,0,0,0,0,0,0,0]
    
        for(let j=0;j<a.length;j++){
          if(labelss[i]==a[j].Classification){
            let m=a[j].month
            let mf:number=+m
             
            d.data[mf-1]=+a[j].TotalCharge
            console.log(d.data)
          }
          
        }
          this.lineChartData.push(d)
        }
        this.wait=false

        this.isDataAvailable=true      

      
      
    })
  }
  
ch(){
  if(this.choix=="a"){
    this.acceptancesurf()
  }
  if(this.choix=='c'){
    this.ok()
  }
  if(this.choix=="o"){
    this.origin()
  }
}



  // events


  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public hideOne() {
    const isHidden = this.chart.isDatasetHidden(1);
    this.chart.hideDataset(1, !isHidden);
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
class A  {
  data:Array<number>
  label:string
}
