import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//service for getting users from jsonplaceholder
export class UsersService {
  urls:any = {
    users: 'https://jsonplaceholder.typicode.com/users',
  }

  constructor(private http: HttpClient) {
  }
  //recieves all users as a Observable
  public getUsers(): Observable<any>{
    return this.http.get(this.urls.users);
  }
  //recieves a user as a Observable with a id
  public getUser(id:string): Observable<any>{
    return this.http.get(this.urls.users + "/" + id);
  }
}
