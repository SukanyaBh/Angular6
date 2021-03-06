import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private httpClient : HttpClient) { }
  getUsers(){
    var data = this.httpClient.get('https://jsonplaceholder.typicode.com/users');
    return data;
  }
}
