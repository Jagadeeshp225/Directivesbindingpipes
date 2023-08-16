import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  a:string = 'angular training'
  b:string='jagadish'
  date:Date=new Date()

  constructor() { }

  ngOnInit(): void {
  }

}
