import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { aboutservice } from 'src/ServiceAboute/aboutserivce';
import { Routes, RouterModule } from '@angular/router';


const routes:Routes=[
  {path:'aboute',component:AboutComponent},
  {path:'contacts',component:ContactComponent},
  {path:'',redirectTo:'/aboute',pathMatch:'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [aboutservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
