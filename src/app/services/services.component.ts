import {Component} from "@angular/core";
import {IDoctor} from "../interfaces/doctor.interface";
import {HttpClient} from "@angular/common/http";
import {IService} from "../interfaces/service.interface";

@Component({
  selector:'app-services',
  templateUrl:'services.component.html',
  styleUrls:['services.component.css']
})

export class ServicesComponent {
  service: IService[] = [];

  //tim cach lay du lieu tu api roi cho vao bien data
  constructor(private http: HttpClient) {}

  ngOnInit(){ //ham nay tu dong chay khi print giao dien ra
    const url1='http://localhost:5000/get-service';
    this.http.get<IService[]>(url1).subscribe(data=>{
      this.service = data;
    })
  }
}
