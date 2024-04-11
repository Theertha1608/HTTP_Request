import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

    constructor(private _http : HttpClient) { }
  
    getUserDetails() {
      return this._http.get('https://jsonplaceholder.typicode.com/users')
    }
  }
  