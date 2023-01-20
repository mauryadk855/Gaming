import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GamingRegistrationService } from 'src/Servicess/gaming-registration.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-gaming-registration',
  templateUrl: './gaming-registration.component.html',
  styleUrls: ['./gaming-registration.component.scss']
})
export class GamingRegistrationComponent {

  FirstName: string = '';
  MiddleName:string='';
  LastName:string='';
  DateofBirth:string='';
  Gender:string='';
  Address:string='';
  City:string='';
  Pincode:string='';
  Email:string='';
  Mobile_Number:string='';
  Courses:string='';

  constructor(private route:Router, private GamingRegistrationForm:GamingRegistrationService){
  }
  GamingRegistrationComponent(){
    this.route.navigate(['/Join Now'])
  }
  Services(){
    this.route.navigate(['/Services'])
  }
 AboutUs(){
  this.route.navigate(['/AboutUs'])
 }
 ContactUs(){
  this.route.navigate(['/ContactUs'])
 }
 Home(){
  this.route.navigate(['/Home'])
 }
 Join(){
  this.route.navigate(['/Join'])
}
Submit() {
  this.route.navigate(['/Submit'])
}

getuserFormData(data:any){

  if (this.FirstName!= '' || this.MiddleName!= ''|| this.LastName!= '' || this.DateofBirth!= '' || this.Gender!= ''|| this.Address!= '' || this.City!= '' || this.Pincode!= ''|| this.Email!= '' || this.Mobile_Number!= '' || this.Courses!= '') { 
    console.warn(data);
    
    var req = {
      Id: 0,
      First_Name: this.FirstName,
      Middle_Name: this.MiddleName,
      Last_Name: this.LastName,
      Date_of_Birth: this.DateofBirth,
      Gender: this.Gender,
      Address: this.Address,
      City: this.City,
      Pincode: this.Pincode,
      Email: this.Email,
      Mobile_Number: this.Mobile_Number,
      Courses: this.Courses,
    };
    this.GamingRegistrationForm.saveusers(req).subscribe((result: any) => {

      console.warn(result)
      alert(result.description);
      this.FirstName = "";
      this.MiddleName = "";
      this.LastName = "";
      this.DateofBirth = "";
      this.Gender = "";
      this.Address = "";
      this.City = "";
      this.Pincode = "";
      this.Email = "";
      this.Mobile_Number = "";
      this.Courses = "";


  })
}
else{
  alert("Data Not Found...!");
}   
}
}
