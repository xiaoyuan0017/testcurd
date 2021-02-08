import { Component, OnInit } from '@angular/core';
import { environment } from "../environments/environment";
import { ApiService } from "./api.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ThrowStmt } from '@angular/compiler';


const headers = new HttpHeaders().set(
  "Content-type", "application/json; charset=UTF-8"
);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angDemo';
  name = "";
  age = 1;
  country = "";
  loadindex = -10;
  loadback = 'none'
  disrate = 'none';
  userarr = [];
  updateid = ""
  updatename = ""
  updateage = 1;
  updatecountry = ""
  constructor(private apis: ApiService, private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>(`${environment.api_tfback}alldata`, { headers }).subscribe(
      {
        next: data => {
          if (data.status == 200) {
            // sessionStorage.removeItem("usercode")

            this.userarr = data.data

          }
          if (data.status == 304) {
            alert("email or password is not correct")
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

  subdata(event) {
    this.loadindex = 15;
    this.loadback = 'block'
    this.disrate = 'block';
    // console.log(this.name,this.age,this.country);
    this.apis.sendata(this.name, this.age, this.country)
  }
  updateinfo(event){
    this.updateid = event.target.parentNode.parentNode.childNodes[0].innerText
    this.updatename = event.target.parentNode.parentNode.childNodes[1].innerText
    this.updateage = event.target.parentNode.parentNode.childNodes[2].innerText
    this.updatecountry = event.target.parentNode.parentNode.childNodes[3].innerText
    // console.log(this.updateid);
    // console.log(this.updateage);
    // console.log(this.updateage);
    
  }
  updatethis(event) {
    this.loadindex = 15;
    this.loadback = 'block'
    this.disrate = 'block';
    this.apis.updatedata(this.updateid,this.updatename, this.updateage, this.updatecountry)
  }

  deletethis(event) {
    event.target.parentNode.parentNode.remove();
    // console.log(event.target.parentNode.parentNode.firstChild.innerText);

    let currentevent = event.target.parentNode.parentNode.firstChild.innerText
    this.apis.deletedata(currentevent)
  }


}
