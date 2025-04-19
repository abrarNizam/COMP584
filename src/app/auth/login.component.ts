import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, UntypedFormGroup, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field'
import { RouterLink } from '@angular/router';
import { LoginRequest } from './login-request';

//MatInputFields
@Component({
  selector: 'app-login',
  imports: [MatFormFieldModule,
    ReactiveFormsModule,
    RouterLink
    
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  
  form!: FormGroup;

  constructor(){

  }
  ngOnInit(): void {
    this.form = new FormGroup({
      userName: new FormControl("",Validators.required),
      password: new FormControl("",Validators.required)
    }); 
  }

  onSubmit(){
    let loginRequest= <LoginRequest>{
      userName : this.form.controls['userName'].value,
      password : this.form.controls['password'].value
    };
  }
}
