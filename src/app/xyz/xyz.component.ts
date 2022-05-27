import { Component} from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http'


@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.css']
})
export class XyzComponent {
  
  constructor(private http:HttpClient) {}

  currentRating = 2;
  

  postData(data:any){
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type','application/json; charset=utf-8')
    const url = 'http://localhost:8080/api/recipepost'

    console.log(data)

    this.http.post(url,data,{headers:headers}).subscribe((result)=>{
      console.warn("Result",result)
      alert("your recipe has been added")
    })
  }

}
