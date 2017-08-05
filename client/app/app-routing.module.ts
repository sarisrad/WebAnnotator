import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './components/pages/homePage.component';
import { AboutPageComponent } from './components/pages/aboutPage.component';
import { WorkspacePageComponent } from './components/pages/workspacePage.component';
import { ManageCollectionsPageComponent } from './components/pages/manageCollectionsPage.component';
import { EditUserComponent } from './components/pages/editUser.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomePageComponent },
  { path: 'about',  component: AboutPageComponent },
  { path: 'workspace',  component: WorkspacePageComponent },
  { path: 'manage-collections',  component: ManageCollectionsPageComponent },
  { path: 'edit-user',  component: EditUserComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/