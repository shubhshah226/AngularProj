import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import {RestoService} from '../resto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminaddresto',
  templateUrl: './adminaddresto.component.html',
  styleUrls: ['./adminaddresto.component.css']
})
export class AdminaddrestoComponent implements OnInit {

  constructor(private resto:RestoService,private router:Router) { }

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
      this.router.navigate(['list'])
    })
    this.addRestoForm.reset({});
  }
 

}
