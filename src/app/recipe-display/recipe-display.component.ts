import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-display',
  templateUrl: './recipe-display.component.html',
  styleUrls: ['./recipe-display.component.css']
})
export class RecipeDisplayComponent  {

  constructor(private http:HttpClient){}

  getData(){
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type','application/json; charset=utf-8')
    const url = 'http://localhost:8080/api/getrecipe'

    this.http.get<any>(url,{headers:headers}).subscribe((result)=>{
      console.warn("result",result)
    })
  }

}
