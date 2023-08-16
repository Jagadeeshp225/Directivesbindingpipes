import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent  {
k:string="jagadish";
//name:string  asking some default value
name:string="rohit1"  // no need to ask default 
name1:string="march 31st"
clickme(){
  alert("hello"+this.k)
}


}
