import { Component, OnInit } from '@angular/core';
import {RestoService} from '../resto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usershowlist',
  templateUrl: './usershowlist.component.html',
  styleUrls: ['./usershowlist.component.css']
})
export class UsershowlistComponent implements OnInit {
data:any=[]
  constructor(private resto:RestoService,private router:Router) {
    this.resto.getList().subscribe(data=>{
      console.log(data);
      this.data=data;
    })
   }

  ngOnInit(): void {
  }
  logout()
  {
    this.router.navigate(['login']);
  }
  addresto()
  {
    this.router.navigate(['add']);
  }

}
