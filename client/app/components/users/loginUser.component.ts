import { Component, Input } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/User';

@Component({
  moduleId: module.id,
  selector: 'login-user',
  templateUrl: '../../../../templates/loginUser.component.html',
  providers:[],
  // styleUrls: ['../../../../styles/login_user.css']
})

export class LoginUserComponent {
	private loginUserData: object;

	@Input() isLogged: boolean;

	constructor(private usersService: UsersService){
		this.init();
	}

	init(){
		this.loginUserData = {};
		this.isLogged = false;
		this.checkIfLogged();
	}

	checkIfLogged(){
		// use cookies to check if the user is logged
	}

	login(){
		this.isLogged = true;
	}

	loginUser(){
		this.usersService.loginUser(this.loginUserData)
			.subscribe(res => {
				if (res.length == 0) // error with login
					alert("The given login information is wrong!");
				else
					this.login();
			});
	}
}