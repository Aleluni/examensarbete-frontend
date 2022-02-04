import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { XyzComponent } from './xyz/xyz.component';

const routes: Routes = [
  {path: 'itemform', component: XyzComponent},
  {path:'loginform', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[XyzComponent,LoginComponent]
