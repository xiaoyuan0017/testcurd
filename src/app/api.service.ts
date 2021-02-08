import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../environments/environment";


const headers = new HttpHeaders().set(
  "Content-type", "application/json; charset=UTF-8"
);


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  sendata(name,age,country){
    this.http.post<any>(`${environment.api_tfback}sendata`, { name: name, age: age,country: country, }, { headers }).subscribe(
      {
        next: data => {
          if (data.status == 200) {
            alert("send success")
            window.location.reload();
          }
          if (data.status == 304) {
            window.location.reload();
          }
        },
        error: error => {
          console.log(error);
          console.error('There was an error!', error)
        }
      }
    );
  }
  updatedata(id,name,age,country){
    this.http.post<any>(`${environment.api_tfback}updatedata`, { id: id,name: name, age: age,country: country, }, { headers }).subscribe(
      {
        next: data => {
          if (data.status == 200) {
            alert("send success")
            window.location.reload();
          }
          if (data.status == 304) {
            window.location.reload();
          }
        },
        error: error => {
          console.log(error);
          console.error('There was an error!', error)
        }
      }
    );

  }
  deletedata(id){
    this.http.post<any>(`${environment.api_tfback}deletedata`, { id: id, }, { headers }).subscribe(
      {
        next: data => {
          
        },
        error: error => {
          console.log(error);
          console.error('There was an error!', error)
        }
      }
    );
  }
}
