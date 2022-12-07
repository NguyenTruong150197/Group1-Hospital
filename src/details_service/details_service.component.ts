import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from '@angular/router';
import {IService} from "../app/interfaces/service.interface";


@Component({
  selector:'app-details_service',
  templateUrl:'details_service.component.html',
  styleUrls:['details_service.component.css']
})


export class Details_serviceComponent implements OnInit{
  id: number = 0;
  service: IService[] = [];
  product: IService[] = [];

  //tim cach lay du lieu tu api roi cho vao bien data
  constructor(private http: HttpClient, private route:ActivatedRoute) {}

  ngOnInit(){ //ham nay tu dong chay khi print giao dien ra
    const url1='http://localhost:5000/get-service';
    this.http.get<IService[]>(url1).subscribe(data=>{
      this.service = data;
    })
    this.id = this.route.snapshot.params['id'];
    const url2='http://localhost:5000/get-service_'+this.id;
    console.log(url2);
    this.http.get<IService[]>(url2).subscribe(data2=>{
      this.product = data2;
    })
  }
}

