import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RestoService } from '../resto.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private resto: RestoService,private router:Router) { }
  adminloginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })
  ngOnInit(): void {
  }
  adminlogin() {
    console.warn(this.adminloginForm.value)
    this.resto.adminlogin().subscribe((result: any) => {
      const user = result.find((a: any) => {
        return a.email === this.adminloginForm.value.email && a.password === this.adminloginForm.value.password
      }
      )
      if(user)
      {
        this.adminloginForm.reset({});
        this.router.navigate(['list']);
      }
      else if(this.adminloginForm.value.email=="" && this.adminloginForm.value.password=="")
      {
        alert("Please Enter Username And Password")
      }
      else
      {
        alert("Enter Valid UserName And Password !!");
        this.adminloginForm.reset({});
 
      }
    },err=>{
      alert("Something Went Wrong !!");
    })
  }

}
