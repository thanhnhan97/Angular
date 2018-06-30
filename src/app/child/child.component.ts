import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input('name') ten : string;
  @Input('tuoi') agechil : number;
  
  constructor() { }

  ngOnInit() {
  }

}
