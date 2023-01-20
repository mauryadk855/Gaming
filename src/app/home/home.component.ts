import { useAnimation } from '@angular/animations';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ContactUsService } from 'src/Servicess/contact-us.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  Email: string = '';
  MobileNo: string = '';
  Message: string = '';

  constructor(private route: Router, private ContactUsForm: ContactUsService,  ) { }

  Services() {
    this.route.navigate(['/Services'])
  }
  AboutUs() {
    this.route.navigate(['/AboutUs'])
  }
  ContactUs() {
    this.route.navigate(['/ContactUs'])
  }
  Home() {
    this.route.navigate(['/Home'])
  }
  Submit() {
    this.route.navigate(['/Submit'])
  }
  Join(){
    this.route.navigate(['/JoinNow'])
  }

 
  


  getUserFormData(data: any) {
    
    if (this.Email!= '' || this.MobileNo!= ''|| this.Message!= '' ) { 
    console.warn(data);
    debugger;
    var req = {
      Id: 0,
      Email: this.Email,
      MobileNo: this.MobileNo,
      Message: this.Message,

    };
    this.ContactUsForm.saveUser(req).subscribe((result: any) => {

      console.warn(result)
      alert(result.description);
      this.Email = "";
      this.MobileNo = "";
      this.Message = "";

    })
  }
  else{
    alert("Data Not Found...!");
  }

}
}
