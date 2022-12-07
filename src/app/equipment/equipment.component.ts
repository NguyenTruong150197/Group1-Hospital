import { Component, OnInit } from '@angular/core';
import {IEquipment} from "../interfaces/equipment.interface";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipment: IEquipment[] = [];

  //tim cach lay du lieu tu api roi cho vao bien data
  constructor(private http: HttpClient) {}

  ngOnInit(){ //ham nay tu dong chay khi print giao dien ra
    const url1='http://localhost:5000/get-equipment';
    this.http.get<IEquipment[]>(url1).subscribe(data=>{
      this.equipment = data;
    })
  }
}
