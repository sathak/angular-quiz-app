import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Import it up here

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
private _jsonURL = "https://raw.githubusercontent.com/sathak/angular-quiz-app/master/src/data/data.json";
  getData() {
    return this.http.get(this._jsonURL, {responseType : 'json'})
  }
}