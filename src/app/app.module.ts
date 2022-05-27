import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';
import { HttpClient, HttpClientModule, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RecipeDisplayComponent } from './recipe-display/recipe-display.component';
import { AppServiceService } from './app-service.service';
import { Injectable } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
    });
    return next.handle(xhr);
  }
}

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LoginComponent,
    NavbarComponent,
    RecipeDisplayComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [AppServiceService,{provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}



