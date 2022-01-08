import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RestoService } from '../resto.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private resto: RestoService,private router:Router) { }
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  ngOnInit(): void {
  }
  login() {
    console.warn(this.loginForm.value)
    this.resto.login().subscribe((result: any) => {
      const user = result.find((a: any) => {
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      }
      )
      if(user)
      {
        alert("Login Success");
        this.loginForm.reset({});
        this.router.navigate(['userlist']);
      }
      else if(this.loginForm.value.email=="" && this.loginForm.value.password=="")
      {
        alert("Please Enter Username And Password")
      }
      else
      {
        alert("Enter Valid UserName And Password !!");
        this.loginForm.reset({});
 
      }
    },err=>{
      alert("Something Went Wrong !!");
    })
  }

}
