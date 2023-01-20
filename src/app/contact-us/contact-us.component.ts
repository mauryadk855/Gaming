import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {

  constructor(private route:Router){
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
  
}
