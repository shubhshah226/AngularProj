import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import {RestoService} from '../resto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private resto:RestoService,private router:Router) { }
  alert:boolean=false;
  registerForm=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl('')
  })
 
  ngOnInit(): void {
  }
  register()
  {
    console.warn(this.registerForm.value)
    this.resto.register(this.registerForm.value).subscribe((result:any)=>{
      console.warn(result);
      this.alert=true;
      this.registerForm.reset({})
      this.router.navigate(['login'])
    })
  }
  closeAlert()
  {
    this.alert=false;
  }
}
