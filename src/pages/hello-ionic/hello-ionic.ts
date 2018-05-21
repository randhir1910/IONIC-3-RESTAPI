import {Component} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {

  url: string = "http://localhost:8080/item/getItem";

  constructor(public http: HttpClient) {

  }

  /**
   * ionic 3 post request.
   */

  addItem() {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append("Access-Control-Allow-Origin","true");
    headers.append('Access-Control-Allow-Methods', 'POST');

    this.http.post("http://localhost:8080/item/addItem", {
      itemId: 1,
      itemName: "Pepsi",
      price: 98
    }, {headers: headers})
      .subscribe(data => {
        console.log(data);
      });
  }

  /**
   * ionic 3 get request.
   * @returns {Promise<any>}
   */
  getItem() {
    return new Promise(resolve => {
      this.http.get(this.url).subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log(err)
      })
    })
  }


}
