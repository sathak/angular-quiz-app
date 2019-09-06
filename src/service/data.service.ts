import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient } from '@angular/common/http';  // Import it up here

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
private _jsonURL = "https://github.com/sathak/angular-quiz-app/tree/master/src/data/data.json";
 httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
    'Content-Type': 'application/json'
  })
};
  getData() {
    return this.http.post(this._jsonURL,this.httpOptions)
  }
}