import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @Input('list') myUsers : any[] = [];
  txtFullName : string;
  @Output('txtKeyName') OnHandelName = new EventEmitter<string>();
  
  constructor() { }
    
  ngOnInit()
  {  }
  onSubmit()
  {
    
    //Truyền giá trị muốn đẩy cho componet cha
      this.OnHandelName.emit(this.txtFullName);
  }
}
