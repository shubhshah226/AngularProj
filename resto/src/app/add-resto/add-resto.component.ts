import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import {RestoService} from '../resto.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {

  constructor(private resto:RestoService,private router:Router) { }
  alert:boolean=false;
  ngOnInit(): void {
  }
  addRestoForm=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    address:new FormControl('')
  })
  CollectResto(value:any)
  {
    this.resto.saveResto(this.addRestoForm.value).subscribe((result)=>{
      console.warn(result);
      this.alert=true;
      this.router.navigate(['userlist'])
    })
    this.addRestoForm.reset({});
  }
  closeAlert()
  {
    this.alert=false;
  }
 
}
