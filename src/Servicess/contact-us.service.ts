import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlSerializer } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  PostDataUrl='https://localhost:7203/api/ContactUs/AddContactUs'
  GetDataUrl='https://localhost:7203/api/ContactUs/GetAllContactUs'

  constructor(private http:HttpClient) {}
  
  users(){
    return this.http.get(this.GetDataUrl);
   }
   saveUser(data:any){
    return this.http.post(this.PostDataUrl,data)
   }


}
