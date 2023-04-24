import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BoxDirective } from './Custom/box.directive';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


const routes:Routes=[
  {path:'',redirectTo:'Home', pathMatch:'full' },
  {path:'Home',component:HomeComponent},
  {path:'About', component:AboutComponent},
  {path:'Project', component:ProjectsComponent},
  {path:'Contact', component:ContactComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BoxDirective,
    ProjectsComponent,
    ContactComponent,
   
 
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) ,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
