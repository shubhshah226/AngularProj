import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import {RestoService} from '../resto.service';
import {ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {

  constructor(private route:ActivatedRoute,private resto:RestoService,private router:Router) { }
  alert:boolean=false
  updateRestoForm=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    address:new FormControl('')
  })

  ngOnInit(): void {
    console.warn(this.route.snapshot.params['id'])
    this.resto.getcurrentResto(this.route.snapshot.params['id']).subscribe((result:any)=>{
      console.warn(result)
      this.updateRestoForm=new FormGroup({
        name:new FormControl(result.name),
        email:new FormControl(result.email),
        address:new FormControl(result.address)
      })
    
    })

  }
  collection()
  {
    console.warn(this.updateRestoForm.value);
    this.resto.updateResto(this.route.snapshot.params['id'],this.updateRestoForm.value).subscribe((result:any)=>{
      console.warn("result",result)
      this.alert=true;
      this.router.navigate(['list']);
    },err=>{alert("Something Went Wrong")})
  }
  closeAlert()
  {
    this.alert=false;
  }

}
