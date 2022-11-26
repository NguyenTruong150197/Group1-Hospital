import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {DoctorsComponent} from "./doctors/doctors.component";
import {ContactComponent} from "./contact/contact.component";
import {CentresComponent} from "./centres/centres.component";
import {AboutusComponent} from "./aboutus/aboutus.component";
import {FacilitiesComponent} from "./facilities/facilities.component";
import {ServicesComponent} from "./services/services.component";
import { HomeComponent } from './home/home.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HelpdeskComponent } from './helpdesk/helpdesk.component';
import { RegistrationComponent } from './registration/registration.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes=[
  {path:'',component: AppComponent},
  {path:'doctors',component: DoctorsComponent},
  {path:'centres',component: CentresComponent},
  {path:'contact',component: ContactComponent},
  {path:'aboutus',component: AboutusComponent},
  {path:'facilities',component: FacilitiesComponent},
  {path:'services',component: ServicesComponent}

]
@NgModule({
  declarations: [
    AppComponent,DoctorsComponent,CentresComponent,ContactComponent,AboutusComponent,FacilitiesComponent,
    ServicesComponent,
    HomeComponent,
    FeedbackComponent,
    HelpdeskComponent,
    RegistrationComponent,
    SignUpComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)   // cost: appRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
