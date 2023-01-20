import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {

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
