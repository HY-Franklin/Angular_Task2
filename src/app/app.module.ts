import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from "@angular/common/http";
import { NgMarqueeModule } from 'ng-marquee';
import { PhotographyComponent } from './photography/photography.component';
import { BlogComponent } from './blog/blog.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    MainComponent,
    PhotographyComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgMarqueeModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'main', component: MainComponent},
      {path: 'login', component: LoginComponent},
      {path: 'photography' , component:PhotographyComponent},
      {path: 'blog',component:BlogComponent},
      {path: '**', component: PageNotFoundComponent}
    ]),
    ReactiveFormsModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
