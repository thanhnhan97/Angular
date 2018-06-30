import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../shared/base.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userForm: FormGroup;
  message: boolean  = false;
  constructor(
    private baseService: BaseService,
    private formBuilder: FormBuilder
  ) {
    this.createUserForm();
  }

  ngOnInit() {
  }

  createUserForm() {
    this.userForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: [ '', [ Validators.required ] ]
    });
  }

  logIn() {
    
    let data = this.userForm.value;
    this.baseService.add('/logins/user', data).subscribe(
      (response : any) => {
        if(response !== null)
        {
          this.message = true;
          let user = response.username;
          localStorage.setItem('user',user);
        }
        else
        {
          if(response === null)
          {
            this.message = false;
          }
        }
        // this.message = false;
      },
      er => {
        console.log(er);
        
      }
    );
    
  }

}
