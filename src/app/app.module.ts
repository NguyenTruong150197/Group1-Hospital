import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {CentresComponent} from "./centres/centres.component";
import {DoctorsComponent} from "./doctors/doctors.component";

const appRoutes: Routes=[
  {path:'',component: AppComponent},
  {path:'centres',component: CentresComponent},
  {path:'doctors',component: DoctorsComponent}
]
@NgModule({
  declarations: [
    AppComponent,CentresComponent,DoctorsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)   // cost: appRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
