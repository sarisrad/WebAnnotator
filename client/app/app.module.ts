import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { RegisterUser } from './components/users/registerUser.component';
import { HomePageComponent } from './components/pages/homePage.component';

@NgModule({
  imports: [
          BrowserModule,
					HttpModule,
					FormsModule,
          AppRoutingModule
            ],
  declarations: [ AppComponent, RegisterUser, HomePageComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
