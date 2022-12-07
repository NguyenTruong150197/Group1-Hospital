import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ICentre} from "../interfaces/centre.interface";

@Component({
  selector:'app-department',
  templateUrl:'department.component.html',
  styleUrls:['department.component.css']
})

export class DepartmentComponent {
  centre: ICentre[] = [];

  //tim cach lay du lieu tu api roi cho vao bien data
  constructor(private http: HttpClient) {}

  ngOnInit(){ //ham nay tu dong chay khi print giao dien ra
    const url1='http://localhost:5000/get-centre';
    this.http.get<ICentre[]>(url1).subscribe(data=>{
      this.centre = data;
    })
  }
}
