import {Component} from "@angular/core";
import {IDoctor} from "../interfaces/doctor.interface";
import {HttpClient} from "@angular/common/http";

@Component({
  selector:'app-doctors',
  templateUrl:'doctors.component.html',
  styleUrls:['doctors.component.css']
})

export class DoctorsComponent {

  doctor: IDoctor[] = [];

  //tim cach lay du lieu tu api roi cho vao bien data
  constructor(private http: HttpClient) {}

  ngOnInit(){ //ham nay tu dong chay khi print giao dien ra
    const url1='http://localhost:5000/get-doctor';
    this.http.get<IDoctor[]>(url1).subscribe(data=>{
      this.doctor = data;
    })
  }
}
