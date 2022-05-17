import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { XyzComponent } from './xyz/xyz.component';
import { RecipeDisplayComponent } from './recipe-display/recipe-display.component';

const routes: Routes = [
  {path: 'itemform', component: XyzComponent},
  {path:'loginform', component:LoginComponent},
  {path:'recipe-display',component:RecipeDisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[XyzComponent,LoginComponent,RecipeDisplayComponent]
