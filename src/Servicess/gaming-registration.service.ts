import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamingRegistrationService {

PostDataUrl='https://localhost:7203/api/GamingDesign/AddGamingDesign'
GetDataUrl='https://localhost:7203/api/GamingDesign/GetAllGamingDesign'
  
  constructor(private http:HttpClient) {}

  users(){
    return this.http.get(this.GetDataUrl)
  }
  saveusers(data:any){
    return this.http.post(this.PostDataUrl,data)
  }
}
