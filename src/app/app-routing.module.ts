import { BrowserModule} from "@angular/platform-browser";
import { NgModule} from '@angular/core';


import { RouterModule, Routes} from "@angular/router";
import { CommonModule } from '@angular/common';
import { HomeComponent} from "./home/home.component";
import { SignUpComponent} from "./sign-up/sign-up.component";
import { RegistrationComponent} from "./registration/registration.component";
import { FeedbackComponent} from "./feedback/feedback.component";
import { HelpdeskComponent} from "./helpdesk/helpdesk.component";
import { RoomComponent} from "./room/room.component";
import { RoomContentComponent} from "./room-content/room-content.component";
import { FaqsComponent} from "./faqs/faqs.component";
import {TimetableComponent} from "./timetable/timetable.component";


const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'signup',component: SignUpComponent},
  {path:'registration',component: RegistrationComponent},
  {path:'feedback',component: FeedbackComponent},
  {path:'helpdesk',component: HelpdeskComponent},
  {path:'home',component: HomeComponent},
  {path:'room',component: RoomComponent,
    children:[
      {path: 'room-content', component: RoomContentComponent}
    ]
  },

  {path:'helpdesk',component: HelpdeskComponent,
    children:[
      {path: 'faq', component: FaqsComponent},
      {path: 'timetable', component: TimetableComponent},
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, BrowserModule, RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers:[]
})
export class AppRoutingModule { }
