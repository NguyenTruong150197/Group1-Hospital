import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {DoctorsComponent} from "./doctors/doctors.component";
import {ContactComponent} from "./contact/contact.component";
import {DepartmentComponent} from "./department/department.component";
import {AboutusComponent} from "./aboutus/aboutus.component";
import {FacilitiesComponent} from "./facilities/facilities.component";
import {ServicesComponent} from "./services/services.component";
import { HomeComponent } from './home/home.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HelpdeskComponent } from './helpdesk/helpdesk.component';
import { RegistrationComponent } from './registration/registration.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavDropDownComponent } from './nav-drop-down/nav-drop-down.component';
import { RoomComponent } from './room/room.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { RoomContentComponent } from './room-content/room-content.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { FaqsComponent } from './faqs/faqs.component';
import { AppRoutingModule } from './app-routing.module';
const appRoutes: Routes=[
  {path:'',component: HomeComponent},
  {path:'doctors',component: DoctorsComponent},
  {path:'department',component: DepartmentComponent},
  {path:'contact',component: ContactComponent},
  {path:'about-us',component: AboutusComponent},
  {path:'facilities',component: FacilitiesComponent},
  {path:'services',component: ServicesComponent},
  {path:'signup',component: SignUpComponent},
  {path:'registration',component: RegistrationComponent},
  {path:'feedback',component: FeedbackComponent},
  {path:'helpdesk',component: HelpdeskComponent},
  {path:'home',component: HomeComponent},
  {path:'room',component: RoomComponent},
  {path:'equipment',component: EquipmentComponent},
  {path:'infra',component: InfrastructureComponent},

]
@NgModule({
  declarations: [
    AppComponent,
    DoctorsComponent,
    DepartmentComponent,
    ContactComponent,
    AboutusComponent,
    FacilitiesComponent,
    ServicesComponent,
    HomeComponent,
    FeedbackComponent,
    HelpdeskComponent,
    RegistrationComponent,
    SignUpComponent,
    PageNotFoundComponent,
    NavDropDownComponent,
    RoomComponent,
    InfrastructureComponent,
    RoomContentComponent,
    EquipmentComponent,
    FaqsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,   // cost: appRoutes,
    // RouterModule.forRoot([
    //   {path:'home',component: HomeComponent},
    //   {path:'',component: HomeComponent},
    //   {path:'signup',component: SignUpComponent},
    //   {path:'registration',component: RegistrationComponent},
    //   {path:'feedback',component: FeedbackComponent},
    //   {path:'helpdesk',component: HelpdeskComponent},
    //   {path:'**',component: PageNotFoundComponent},
    //   {path:'doctors',component: DoctorsComponent},
    //   {path:'department',component: DepartmentComponent},
    //   {path:'contact',component: ContactComponent},
    //   {path:'about-us',component: AboutusComponent},
    //   {path:'facilities',component: FacilitiesComponent},
    //   {path:'services',component: ServicesComponent},
    //   {path:'infra',component: InfrastructureComponent},
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
