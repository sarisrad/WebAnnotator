import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/User';

@Component({
  moduleId: module.id,
  selector: 'register-user',
  templateUrl: '../../../../templates/registerUser.component.html',
  providers:[],
  styleUrls: ['../../../../styles/register_user.css']
})

export class RegisterUser {
	users: User[];
	newUser: User;
	passConfirmation: string;

	constructor(private usersService:UsersService){
		this.usersService.getUsers()
			.subscribe(users => {
				this.users = users;
			});
		this.initUser();
	}

	initUser() {
		this.newUser = new User;
		this.newUser.role = "none";
		this.passConfirmation = "";
	}

	addUser(event){
		event.preventDefault();
		if(this.passConfirmation == this.newUser.password){
			this.usersService.addUser(this.newUser)
				.subscribe(user => {
					this.initUser();
				});
		}
		else {
			alert("Wrong password confirmation");
		}
	}

	// deleteUser(id) {
	// 	var users = this.users;
	// 	this.usersService.deleteUser(id).subscribe(data => {
	// 		if(data.n == 1){
	// 			for(var i = 0; i < users.length; i++){
	// 				if(users[i]._id == id){
	// 					users.splice(i, 1);
	// 				}
	// 			}
	// 		}
	// 	});
	// }
}
