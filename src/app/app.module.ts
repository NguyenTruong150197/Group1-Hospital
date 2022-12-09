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
import {Services_1Component} from "./services_1/services_1.component";
import {Services_2Component} from "./services_2/services_2.component";
import {Services_3Component} from "./services_3/services_3.component";
import {Services_4Component} from "./services_4/services_4.component";
import {Services_5Component} from "./services_5/services_5.component";
import {Services_6Component} from "./services_6/services_6.component";
import {Services_7Component} from "./services_7/services_7.component";
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
import {HttpClientModule} from "@angular/common/http";
import {DetailsComponent} from "../details/details.component";
import {Details_serviceComponent} from "../details_service/details_service.component";
import {FaqsComponent} from "./faqs/faqs.component";
import {AppRoutingModule} from "./app-routing.module";
import {AppointmentComponent} from "./appointment/appointment.component";
const appRoutes: Routes=[
  {path:'',component: HomeComponent},
  {path:'doctors',component: DoctorsComponent},
  {path:'department',component: DepartmentComponent},
  {path:'contact',component: ContactComponent},
  {path:'about-us',component: AboutusComponent},
  {path:'facilities',component: FacilitiesComponent},
  {path:'services',component: ServicesComponent},
  {path:'services_1',component: Services_1Component},
  {path:'services_2',component: Services_2Component},
  {path:'services_3',component: Services_3Component},
  {path:'services_4',component: Services_4Component},
  {path:'services_5',component: Services_5Component},
  {path:'services_6',component: Services_6Component},
  {path:'services_7',component: Services_7Component},
  {path:'signup',component: SignUpComponent},
  {path:'registration',component: RegistrationComponent},
  {path:'feedback',component: FeedbackComponent},
  {path:'helpdesk',component: HelpdeskComponent},
  {path:'home',component: HomeComponent},
  {path:'room',component: RoomComponent},
  {path:'equipment',component: EquipmentComponent},
  {path:'infra',component: InfrastructureComponent},
  {path:'details/:id',component: DetailsComponent},
  {path:'details_service/:id',component: Details_serviceComponent},
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
    Services_1Component,
    Services_2Component,
    Services_3Component,
    Services_4Component,
    Services_5Component,
    Services_6Component,
    Services_7Component,
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
    DetailsComponent,
    Details_serviceComponent,
    FaqsComponent,
    AppointmentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),   // cost: appRoutes,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'home',component: HomeComponent},
      {path:'',component: HomeComponent},
      {path:'signup',component: SignUpComponent},
      {path:'registration',component: RegistrationComponent},
      {path:'feedback',component: FeedbackComponent},
      {path:'helpdesk',component: HelpdeskComponent},
      {path:'**',component: PageNotFoundComponent},
      {path:'doctors',component: DoctorsComponent},
      {path:'department',component: DepartmentComponent},
      {path:'contact',component: ContactComponent},
      {path:'about-us',component: AboutusComponent},
      {path:'facilities',component: FacilitiesComponent},
      {path:'services',component: Services_1Component},
      {path:'infra',component: InfrastructureComponent},
      {path:'appointment',component: AppointmentComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
