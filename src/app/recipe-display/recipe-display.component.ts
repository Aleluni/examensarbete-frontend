import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-display',
  templateUrl: './recipe-display.component.html',
  styleUrls: ['./recipe-display.component.css']
})
export class RecipeDisplayComponent implements OnInit  {

  recipes !: Recipe[];

  constructor(private api:ApiService, private http:HttpClient){}
  ngOnInit(): void {
    this.getRecipes();
  }
  
  getRecipes(){
    this.http.get<any>('http://localhost:8080/api/getrecipe').subscribe(resp => {
      console.log(resp)
      this.recipes = resp;
    })
  }
  }

