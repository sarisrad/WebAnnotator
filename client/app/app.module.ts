import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { RegisterUserComponent } from './components/users/registerUser.component';
import { LoginUserComponent } from './components/users/loginUser.component';
import { HomePageComponent } from './components/pages/homePage.component';
import { AboutPageComponent } from './components/pages/aboutPage.component';
import { WorkspacePageComponent } from './components/pages/workspacePage.component';
import { ManageCollectionsPageComponent } from './components/pages/manageCollectionsPage.component';
import { EditUserComponent } from './components/pages/editUser.component';

@NgModule({
  imports: [
          BrowserModule,
					HttpModule,
					FormsModule,
          AppRoutingModule
            ],
  declarations: [ 
                  AppComponent,
                  RegisterUserComponent,
                  LoginUserComponent,
                  HomePageComponent,
                  AboutPageComponent,
                  WorkspacePageComponent,
                  ManageCollectionsPageComponent,
                  EditUserComponent
                ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
