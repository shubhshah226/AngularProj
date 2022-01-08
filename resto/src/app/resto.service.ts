import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RestoService {
  
  url = "http://localhost:3000/restaurants";
  rooturl="http://localhost:3000/";
  tempurl="https://shubhshah226.github.io/jsonapi/db.json";

  constructor(private http: HttpClient) { }
  getList() {
    return this.http.get(this.url);
  } 
  saveResto(data :any) {
    console.warn(data);
    return this.http.post(this.url,data)
  }
  deleteResto(id:any)
  {
    
    return this.http.delete(this.url+`/${id}`);
  }
  getcurrentResto(id:any)
  {
    return this.http.get(this.url+`/${id}`);
  }
  updateResto(id:any,data:any)
  {
    return this.http.put(this.url+`/${id}`,data);

  }
  register(data :any) {
    console.warn(data);
    return this.http.post(this.rooturl+"users",data)
  }
  login()
  {
    return this.http.get(this.rooturl+"users");    
  }
  adminlogin()
  {
    return this.http.get(this.rooturl+"admin");    
  }


}


