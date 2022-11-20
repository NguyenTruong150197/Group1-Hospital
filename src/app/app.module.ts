import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {DoctorsComponent} from "./doctors/doctors.component";
import {DepartmentsComponent} from "./departments/departments.component";

const appRoutes: Routes=[
  {path:'',component: AppComponent},
  {path:'doctors',component: DoctorsComponent},
  {path:'departments',component: DepartmentsComponent}
]
@NgModule({
  declarations: [
    AppComponent,DoctorsComponent,DepartmentsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)   // cost: appRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
