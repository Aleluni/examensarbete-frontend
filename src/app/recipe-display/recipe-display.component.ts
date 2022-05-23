import { HttpClient, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
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

  postData(){
    let data = localStorage.getItem('localList');
    //let data = {"recipeLink":"https://www.ica.se/recept/gronsaksplat-med-kyckling-och-tzatziki-728523/"}
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type','application/json; charset=utf-8')
    const url = 'http://localhost:3000/test'

    console.log(data)

    this.http.post(url,data,{headers:headers}).subscribe((result)=>{
      console.warn("Result",result)
    })
    localStorage.clear()
  }
    
  itemList:any=[];
  addTolist(prod:Recipe){
    console.log(prod.recipeLink);
    let listData = localStorage.getItem('localList');

    if(listData == null){
      let storeDataGet:any = [];
      storeDataGet.push(prod.recipeLink);
      localStorage.setItem('localList',JSON.stringify(storeDataGet));
    }else{
      var id = prod.recipeLink;
      let index:number = -1;
      this.itemList = JSON.parse(localStorage.getItem('localList')!);

        if(index == -1){
          this.itemList.push(prod.recipeLink);
          localStorage.setItem('localList',JSON.stringify(this.itemList))
        }else{
          localStorage.setItem('localList',JSON.stringify(this.itemList))
        }
        
      }
      alert("item was added");
      console.log("this is the local list"+ localStorage.getItem('localList'));
    }

    //console.log(localStorage.getItem);
  }
