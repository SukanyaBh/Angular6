import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private http : HttpClient) { }

  getUser(userId){
    var user = this.http.get('https://jsonplaceholder.typicode.com/users?id='+userId);
    return user;
  }
}
