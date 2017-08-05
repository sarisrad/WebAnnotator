import { Component, Input } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/User';

@Component({
  moduleId: module.id,
  selector: 'login-user',
  templateUrl: '../../../../templates/loginUser.component.html',
  providers:[],
  styleUrls: ['../../../../styles/login_user.css']
})

export class LoginUserComponent {
	private loginUserData: object;
	private currentUser: User;
	private loaded: boolean;
	private isLogged: boolean;

	constructor(private usersService: UsersService){
		this.init();
	}

	init(){
		this.loginUserData = {};
		this.isLogged = false;
		this.checkIfLogged();
	}

	checkIfLogged(){
		this.usersService.getLoggedUser()
			.subscribe(res => {
				if (res){
					this.isLogged = true;
					this.currentUser = res;
				}
				else{
					this.isLogged = false;
					this.currentUser = new User(null);
				}
				this.loaded = true;
			});
	}

	logout(){
		this.usersService.logOutUser()
			.subscribe(res => {
				this.init();
			});
	}

	// login with the given information in 'this.loginUserData'
	loginUser(){
		this.usersService.loginUser(this.loginUserData)
			.subscribe(res => {
				if (res.length == 0) // error with login
					alert("The given login information is wrong!");
				else {
					this.isLogged = true;
					this.currentUser = res;
				}
			});
	}
}