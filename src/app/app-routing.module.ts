import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:"home" ,
    component: HomeComponent
  },
  {
    path:"card" ,
    component: CardComponent
  },
  {
    path:"about" ,
    component: AboutComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

 }
