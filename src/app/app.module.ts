import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {DoctorsComponent} from "./doctors/doctors.component";
import {CentresComponent} from "./centres/centres.component";

const appRoutes: Routes=[
  {path:'',component: AppComponent},
  {path:'doctors',component: DoctorsComponent},
  {path:'centres',component: CentresComponent}
]
@NgModule({
  declarations: [
    AppComponent,DoctorsComponent,CentresComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)   // cost: appRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
