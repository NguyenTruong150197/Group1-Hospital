import { Component } from '@angular/core';
import {ICentre} from "./interfaces/centre.interface";
import {HttpClient} from "@angular/common/http";
import {IDoctor} from "./interfaces/doctor.interface";
import {IService} from "./interfaces/service.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Group1-Hospital';

  centre: ICentre[] = [];
  service: IService[] = [];

  //tim cach lay du lieu tu api roi cho vao bien data
  constructor(private http: HttpClient) {}

  ngOnInit() { //ham nay tu dong chay khi print giao dien ra
    const url1 = 'http://localhost:5000/get-centre';
    this.http.get<ICentre[]>(url1).subscribe(data => {
      this.centre = data;
    })
    const url2='http://localhost:5000/get-service';
    this.http.get<IService[]>(url2).subscribe(data=>{
      this.service = data;
    })
  }
}

