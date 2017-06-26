import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { RegisterUser } from './components/users/registerUser.component';
import { HomePageComponent } from './components/pages/homePage.component';
import { AboutPageComponent } from './components/pages/aboutPage.component';
import { WorkspacePageComponent } from './components/pages/workspacePage.component';
import { ManageCollectionsPageComponent } from './components/pages/manageCollectionsPage.component';

@NgModule({
  imports: [
          BrowserModule,
					HttpModule,
					FormsModule,
          AppRoutingModule
            ],
  declarations: [ 
                  AppComponent,
                  RegisterUser,
                  HomePageComponent,
                  AboutPageComponent,
                  WorkspacePageComponent,
                  ManageCollectionsPageComponent
                ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
