import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'examensarbetefrontend';
  constructor(private app:AppServiceService, private http:HttpClient, private router:Router){

    this.app.authenticate(undefined,undefined);

  }
  logout(){
    this.http.post('logout',{}).subscribe(()=>{
      this.app.authenticated = false;
      this.router.navigateByUrl('/login')
    })
  }
}
