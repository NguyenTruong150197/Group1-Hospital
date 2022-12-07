import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ICentre} from "../app/interfaces/centre.interface";
import {ActivatedRoute} from '@angular/router';
import {IDoctor} from "../app/interfaces/doctor.interface";


@Component({
  selector:'app-details',
  templateUrl:'details.component.html',
  styleUrls:['details.component.css']
})


export class DetailsComponent implements OnInit{
  id: number = 0;
  doctor: IDoctor[] = [];
  centre: ICentre[] = [];
  product: ICentre[] = [];

  //tim cach lay du lieu tu api roi cho vao bien data
  constructor(private http: HttpClient, private route:ActivatedRoute) {}

  ngOnInit(){ //ham nay tu dong chay khi print giao dien ra
    const url1='http://localhost:5000/get-centre';
    this.http.get<ICentre[]>(url1).subscribe(data=>{
      this.centre = data;
    })
    this.id = this.route.snapshot.params['id'];
    const url2='http://localhost:5000/get-centre_'+this.id;
    this.http.get<ICentre[]>(url2).subscribe(data2=>{
      this.product = data2;
    })
    const url3='http://localhost:5000/get-doctor_'+this.id;
    this.http.get<IDoctor[]>(url3).subscribe(data3=>{
      this.doctor = data3;
    })
  }
}

