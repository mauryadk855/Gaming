import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

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
