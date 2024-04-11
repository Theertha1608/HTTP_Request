import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users');
  }

  getUserById(userId: number) {
    return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/users?id=${userId}`);
  }

  getUserDetails() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users');
  }
  saveUserDetails(userDetails: any) {
    return this.http.post('https://jsonplaceholder.typicode.com/users', userDetails);
}
}