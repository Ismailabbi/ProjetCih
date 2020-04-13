import { Component, OnInit,ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import { DashbordService } from 'src/app/Services/dashbord.service';
@Component({
  selector: 'app-surfaceprv',
  templateUrl: './surfaceprv.component.html',
  styleUrls: ['./surfaceprv.component.css']
})
export class SurfaceprvComponent implements OnInit {

  public a: ChartDataSets={}
  isDataAvailable:boolean = false;
  date=2018
  wait:boolean=true
  choix:string;
  public lineChartData: ChartDataSets[] = [];
  public lineChartLabels: Label[] = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre'];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    maintainAspectRatio: false,
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
   this.choix="c"
      this.dash.post_surfaceclassification(this.date).subscribe(data=>{
        console.log(data)
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
               
              d.data[mf-1]=+(a[j].TotalCharge/1000)
              
            }
            
          }
            this.lineChartData.push(d)
          }
          this.wait=false
          this.isDataAvailable=true      

        
        
      })



 








    
        
      
      
    
        
        }

        Famille(){
         
          this.choix='famille'
          this.wait=true
          this.lineChartData=[]
          this.isDataAvailable=false
          this.dash.post_surfaceFamillePv(this.date).subscribe(data=>{
            let a:Array<any>=Object.values(data)
            let labels:string[]=[]
            console.log(this.choix)

            a.forEach(s=>{
              labels.push(s.Famille)
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
                if(labelss[i]==a[j].Famille){
                  let m=a[j].month
                  let mf:number=+m
                   
                  d.data[mf-1]=+(a[j].TotalCharge/1000)
                }
                
              }
        
                this.lineChartData.push(d)
              }
            
              this.isDataAvailable=true   
              this.wait=false   
    
            
            
          })


      

        }
        Proccesus(){


          this.choix='Proc'
          this.wait=true
          this.lineChartData=[]
          this.isDataAvailable=false
          this.dash.post_surfaceProccessusPv(this.date).subscribe(data=>{
            console.log(data)
            let a:Array<any>=Object.values(data)
            let labels:string[]=[]
           
            a.forEach(s=>{
              labels.push(s.Processus)
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
                if(labelss[i]==a[j].Processus){
                  let m=a[j].month
                  let mf:number=+m
                   
                  d.data[mf-1]=+(a[j].TotalCharge/1000)
                }
                
              }
          
                this.lineChartData.push(d)
              }
            
              this.isDataAvailable=true   
              this.wait=false   
    
            
            
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
                         
                        d.data[mf-1]=+(a[j].TotalCharge/1000)
                      }
                      
                    }
                    console.log(d)
                      this.lineChartData.push(d)
                    }
                    console.log(this.lineChartData)
                    this.isDataAvailable=true   
                    this.wait=false   
          
                  
                  
                })


        }
        Categorie(){
          this.choix='cat'
          this.wait=true
          this.lineChartData=[]
       this.isDataAvailable=false
                this.dash.post_surfacecategoriePv(this.date).subscribe(data=>{
                  console.log(data)
                  let a:Array<any>=Object.values(data)
                  let labels:string[]=[]
                 
                  a.forEach(s=>{
                    labels.push(s.categorie)
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
                      if(labelss[i]==a[j].categorie){
                        let m=a[j].month
                        let mf:number=+m
                         
                        d.data[mf-1]=+(a[j].TotalCharge/1000)
                      }
                      
                    }
                    console.log(d)
                      this.lineChartData.push(d)
                    }
                    console.log(this.lineChartData)
                    this.isDataAvailable=true   
                    this.wait=false   
          
                  
                  
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
                  d.data[mf-1]=+(a[j].TotalCharge/1000)

                }
                
              }
              console.log(d)
                this.lineChartData.push(d)
              }
              console.log(this.lineChartData)
              this.isDataAvailable=true
              this.wait=false
    
            
            
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
             
            d.data[mf-1]=+(a[j].TotalCharge/1000)
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
  console.log(this.choix)

  if(this.choix=="a"){
    this.acceptancesurf()
  }
  if(this.choix=='c'){

    this.ok()
  }
  if(this.choix=="o"){
    this.origin()
  }


  if(this.choix=="Proc"){
    this.Proccesus()
  }

  if(this.choix=="famille"){
    this.Famille()
  }

  if(this.choix=="cat"){
    this.Categorie()
  }
  }

}




 


