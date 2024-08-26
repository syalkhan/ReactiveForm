import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor() { }
loginForm = new FormGroup({
  "username": new FormControl('', [Validators.required]),
  "password": new FormControl('', [Validators.required, Validators.minLength(6)])
})
  ngOnInit(): void {
  }
onSubmit(){
  if (this.loginForm.valid) {
    console.log(this.loginForm.value);
  }else{
    console.log("not a valid form");
  }
  
}
}
