import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  
  authenticated = false;
  constructor(private http: HttpClient) { }

  authenticate(credentials:any, callback:any){

    const headers = new HttpHeaders(credentials ? {
      authorization : 'basic' + btoa(credentials.username + ":" + credentials.password)
    }:{});

    this.http.get('user',{headers:headers}).subscribe(response => {
      if(response.constructor.name){
        this.authenticated = true;
      }else{
        this.authenticated = false;
      }
      return callback && callback();
    });
  }
}
