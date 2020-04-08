import { Component, OnInit } from '@angular/core';
import { DashbordService } from 'src/app/Services/dashbord.service';

@Component({
  selector: 'app-tablaumontantp',
  templateUrl: './tablaumontantp.component.html',
  styleUrls: ['./tablaumontantp.component.css']
})
export class TablaumontantpComponent implements OnInit {

  labelorigine:string[]
  datallorigin:any[]=[]
  labelprocessus:string[]
  datallprocessus:any[]=[]
  datallct:string[]=[]
  labelct:string[]
  datallF:string[]=[]
  labelF:string[]
  labelacceptance:string[]
  datallacceptance:any[]=[]
Annee:string
  labelcanal:string[]
  datallcanal:any[]=[]
  constructor(public dash:DashbordService) { }




  ngOnInit() {
    this.dash.post_surfaceFamillePv(2018).subscribe(data=>{
  
      let a:Array<any>=Object.values(data)
    let labels:string[]=[]
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
        let  d: any={}
        d.label=labelss[i]
        d.data=[0,0,0,0,0,0,0,0,0,0,0,0]
        d.quantite=[0,0,0,0,0,0,0,0,0,0,0,0]
    
        for(let j=0;j<a.length;j++){
          if(labelss[i]==a[j].Famille){
            let m=a[j].month
            let mf:number=+m
             
            d.data[mf-1]=+a[j].TotalCharge
            d.quantite[mf-1]=+a[j].Quantite
            
          }
          
        }
          this.datallF.push(d)
        }
 this.labelF=labelss

    })
    this.dash.post_surfacecategoriePv(2018).subscribe(data=>{
  
      let a:Array<any>=Object.values(data)
    let labels:string[]=[]
    a.forEach(s=>{
      labels.push(s.Categorie)
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
        let  d: any={}
        d.label=labelss[i]
        d.data=[0,0,0,0,0,0,0,0,0,0,0,0]
        d.quantite=[0,0,0,0,0,0,0,0,0,0,0,0]
    
        for(let j=0;j<a.length;j++){
          if(labelss[i]==a[j].Categorie){
            let m=a[j].month
            let mf:number=+m
             
            d.data[mf-1]=+a[j].TotalCharge
            d.quantite[mf-1]=+a[j].Quantite
            
          }
          
        }
          this.datallct.push(d)
        }
 this.labelct=labelss

    })
    this.dash.post_surfacePOrigin(2018).subscribe(data=>{
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
          let  d: any={}
          d.label=labelss[i]
          d.data=[0,0,0,0,0,0,0,0,0,0,0,0]
          d.quantite=[0,0,0,0,0,0,0,0,0,0,0,0]
      
          for(let j=0;j<a.length;j++){
            if(labelss[i]==a[j].Origine){
              let m=a[j].month
              let mf:number=+m
               
              d.data[mf-1]=+a[j].TotalCharge
              d.quantite[mf-1]=+a[j].Quantite
              
            }
            
          }
            this.datallorigin.push(d)
          }
   this.labelorigine=labelss

   });
   this.dash.post_surfaceProccessusPv(2018).subscribe(data=>{
  
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
        let  d: any={}
        d.label=labelss[i]
        d.data=[0,0,0,0,0,0,0,0,0,0,0,0]
        d.quantite=[0,0,0,0,0,0,0,0,0,0,0,0]
    
        for(let j=0;j<a.length;j++){
          if(labelss[i]==a[j].Processus){
            let m=a[j].month
            let mf:number=+m
             
            d.data[mf-1]=+a[j].TotalCharge
            d.quantite[mf-1]=+a[j].Quantite
            
          }
          
        }
          this.datallprocessus.push(d)
        }
 this.labelprocessus=labelss

    }

 );

this.dash.post_surfacePcAcceptance(2018).subscribe(
      data=>{
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
          let  d: any={}
          d.label=labelss[i]
          d.data=[0,0,0,0,0,0,0,0,0,0,0,0]
          d.quantite=[0,0,0,0,0,0,0,0,0,0,0,0]
      
          for(let j=0;j<a.length;j++){
            if(labelss[i]==a[j].Acceptance){
              let m=a[j].month
              let mf:number=+m
               
              d.data[mf-1]=+a[j].TotalCharge
              d.quantite[mf-1]=+a[j].Quantite
              
            }
            
          }
            this.datallacceptance.push(d)
          }
   this.labelacceptance=labelss

      }
   )

   this.dash.post_surfacePacanal(2018).subscribe(data=>{
    let a:Array<any>=Object.values(data)
    let labels:string[]=[]
    a.forEach(s=>{
      labels.push(s.Canal)
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
        let  d: any={}
        d.label=labelss[i]
        d.data=[0,0,0,0,0,0,0,0,0,0,0,0]
        d.quantite=[0,0,0,0,0,0,0,0,0,0,0,0]
    
        for(let j=0;j<a.length;j++){
          if(labelss[i]==a[j].Canal){
            let m=a[j].month
            let mf:number=+m
             
            d.data[mf-1]=+a[j].TotalCharge
            d.quantite[mf-1]=+a[j].Quantite
            
          }
          
        }
          this.datallcanal.push(d)
        }
 this.labelcanal=labelss
 console.log(this.datallcanal)
    
        }
 
  )

  }
ch(){
this.labelorigine=[]
this.datallorigin=[]
this.labelacceptance=[]
this.datallacceptance=[]
this.labelcanal=[]
this.datallcanal=[]

this.dash.post_surfacecategoriePv(parseInt(this.Annee)).subscribe(data=>{
  let a:Array<any>=Object.values(data)
  let labels:string[]=[]
  a.forEach(s=>{
    labels.push(s.Categorie)
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
      let  d: any={}
      d.label=labelss[i]
      d.data=[0,0,0,0,0,0,0,0,0,0,0,0]
      d.quantite=[0,0,0,0,0,0,0,0,0,0,0,0]
  
      for(let j=0;j<a.length;j++){
        if(labelss[i]==a[j].Categorie){
          let m=a[j].month
          let mf:number=+m
           
          d.data[mf-1]=+a[j].TotalCharge
          d.quantite[mf-1]=+a[j].Quantite
          
        }
        
      }
        this.datallct.push(d)
      }
this.labelct=labelss

});



  this.dash.post_surfacePOrigin(parseInt(this.Annee)).subscribe(data=>{
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
        let  d: any={}
        d.label=labelss[i]
        d.data=[0,0,0,0,0,0,0,0,0,0,0,0]
        d.quantite=[0,0,0,0,0,0,0,0,0,0,0,0]
    
        for(let j=0;j<a.length;j++){
          if(labelss[i]==a[j].Origine){
            let m=a[j].month
            let mf:number=+m
             
            d.data[mf-1]=+a[j].TotalCharge
            d.quantite[mf-1]=+a[j].Quantite
            
          }
          
        }
          this.datallorigin.push(d)
        }
 this.labelorigine=labelss

 });
 this.dash.post_surfaceFamillePv(parseInt(this.Annee)).subscribe(data=>{
  let a:Array<any>=Object.values(data)
  let labels:string[]=[]
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
      let  d: any={}
      d.label=labelss[i]
      d.data=[0,0,0,0,0,0,0,0,0,0,0,0]
      d.quantite=[0,0,0,0,0,0,0,0,0,0,0,0]
  
      for(let j=0;j<a.length;j++){
        if(labelss[i]==a[j].Famille){
          let m=a[j].month
          let mf:number=+m
           
          d.data[mf-1]=+a[j].TotalCharge
          d.quantite[mf-1]=+a[j].Quantite
          
        }
        
      }
        this.datallF.push(d)
      }
this.labelF=labelss

});
this.dash.post_surfaceProccessusPv(parseInt(this.Annee)).subscribe(data=>{
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
      let  d: any={}
      d.label=labelss[i]
      d.data=[0,0,0,0,0,0,0,0,0,0,0,0]
      d.quantite=[0,0,0,0,0,0,0,0,0,0,0,0]
  
      for(let j=0;j<a.length;j++){
        if(labelss[i]==a[j].Processus){
          let m=a[j].month
          let mf:number=+m
           
          d.data[mf-1]=+a[j].TotalCharge
          d.quantite[mf-1]=+a[j].Quantite
          
        }
        
      }
        this.datallprocessus.push(d)
      }
this.labelprocessus=labelss

});
this.dash.post_surfacePcAcceptance(parseInt(this.Annee)).subscribe(
    data=>{
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
        let  d: any={}
        d.label=labelss[i]
        d.data=[0,0,0,0,0,0,0,0,0,0,0,0]
        d.quantite=[0,0,0,0,0,0,0,0,0,0,0,0]
    
        for(let j=0;j<a.length;j++){
          if(labelss[i]==a[j].Acceptance){
            let m=a[j].month
            let mf:number=+m
             
            d.data[mf-1]=+a[j].TotalCharge
            d.quantite[mf-1]=+a[j].Quantite
            
          }
          
        }
          this.datallacceptance.push(d)
        }
 this.labelacceptance=labelss

    }
 )

 this.dash.post_surfacePacanal(parseInt(this.Annee)).subscribe(data=>{
  let a:Array<any>=Object.values(data)
  let labels:string[]=[]
  a.forEach(s=>{
    labels.push(s.Canal)
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
      let  d: any={}
      d.label=labelss[i]
      d.data=[0,0,0,0,0,0,0,0,0,0,0,0]
      d.quantite=[0,0,0,0,0,0,0,0,0,0,0,0]
  
      for(let j=0;j<a.length;j++){
        if(labelss[i]==a[j].Canal){
          let m=a[j].month
          let mf:number=+m
           
          d.data[mf-1]=+a[j].TotalCharge
          d.quantite[mf-1]=+a[j].Quantite
          
        }
        
      }
        this.datallcanal.push(d)
      }
this.labelcanal=labelss
console.log(this.datallcanal)
  
      }

)


}

}
