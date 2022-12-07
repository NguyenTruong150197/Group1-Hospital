import { Component, OnInit } from '@angular/core';
import {IRoom} from "../interfaces/room.interface";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  room: IRoom[] = [];

  //tim cach lay du lieu tu api roi cho vao bien data
  constructor(private http: HttpClient) {}

  ngOnInit(){ //ham nay tu dong chay khi print giao dien ra
    const url1='http://localhost:5000/get-facility';
    this.http.get<IRoom[]>(url1).subscribe(data=>{
      this.room = data;
    })
  }

}
