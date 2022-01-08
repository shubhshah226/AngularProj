import { Component, OnInit } from '@angular/core';
import {RestoService} from '../resto.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {
  data:any=[];
  collection:any=[];
  constructor(private resto:RestoService,private router:Router) { 
    this.resto.getList().subscribe(data=>{
      console.log(data);
      this.data=data;
    })
  
  }


  ngOnInit(): void {
  }
  deleteResto(item:any)
  {
     console.warn(item);
     this.data.splice(item-1,1)
     this.resto.deleteResto(item).subscribe((result:any)=>{
        console.warn(result)
     })
  }
  logout()
  {
    this.router.navigate(['login']);
  }
  addresto()
  {
    this.router.navigate(['adminaddresto']);
  }

}
