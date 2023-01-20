import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GamingRegistrationComponent } from './gaming-registration/gaming-registration.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [

  {
    path:'',    
    component:HomeComponent
  },
  {
    path:'Home',    
    component:HomeComponent
  },
  {
    path:'Services',    
    component:ServicesComponent
  },
  {
    path:'AboutUs',    
    component:AboutUsComponent
  },
  {
    path:'ContactUs',    
    component:ContactUsComponent
  },
  {
    path:'JoinNow',    
    component:GamingRegistrationComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
