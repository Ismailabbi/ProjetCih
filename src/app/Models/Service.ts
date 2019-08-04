export class Service {
    private id:number
 public ServiceID :string
 public ServiceNAME:string
 public Typedeservice:string
 public Classification:string
  public getid(){
      return this.ServiceID
  }
  public getServiceName(){
      return this.ServiceNAME
  }
  public getTypedeService(){
      return this.Typedeservice
  }
  public getClassification(){
      return this.Classification
  }


}