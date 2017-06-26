import { Component } from '@angular/core';
import { UsersService } from './services/users.service';
import { User } from './models/User';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: '/../templates/app.component.html',
  providers:[ UsersService ]
})

export class AppComponent { 
	tabs: object[];
	activeTab: string;
	loginUserData: object;
	currentUser: User;

	constructor(private usersService:UsersService){
		this.init();
		this.setActiveTab("home");
	}

	init(){
		this.tabs = [
			{route: "home", text:"Home"},
			{route: "about", text:"About"},
			{route: "workspace", text:"Workspace"},
			{route: "manage-collections", text:"Manage Collections"},
		];
		this.currentUser = null;
		this.loginUserData = {};
	}

	getActiveTab(tabName){
		return this.activeTab == tabName;
	}

	setActiveTab(tabName){
		this.activeTab = tabName;
	}

	loginUser(){
		this.usersService.loginUser(this.loginUserData)
				.subscribe(user => {
					console.log(user);
				});
	}
}
