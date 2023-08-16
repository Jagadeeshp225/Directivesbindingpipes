import { Component } from '@angular/core';
import { SD } from './sd';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directivesandbindingsgs';
  marks!:number;
  color:string="";
  msg:string="";
  Movies!:string
  primenumbers:number[]=[2,3,5,7,11,13,17,23];
  b=false;
  b1=false;
  classcolor:string="";
  
  stylebinding(){
    if(this.marks>=51){
       this.color="green";
       this.msg="pass";
    }
    else{
      this.color="red";
      this.msg="fail";
    }
  }
  classbinding(){
    if(this.marks>=51){
      this.classcolor="class";
      this.msg="pass";
      this.b=true;
      this.b1=true;
   }
   else{
    this.classcolor="class1";
    this.msg="fail";
    this.b=false;
    this.b1=true;
   }
  
   
  }
  Details:SD[]=[
    new SD("jagadish",24,'CSE'),
    new SD("xyz",23,'CSE')
  ]
  

}
