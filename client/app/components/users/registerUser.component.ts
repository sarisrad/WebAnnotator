import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/User';

@Component({
  moduleId: module.id,
  selector: 'users',
  templateUrl: '../../../../templates/registerUser.component.html',
  providers:[]
})

export class RegisterUser {
	users: User[];
	newUser: User;

	constructor(private usersService:UsersService){
		this.usersService.getUsers()
			.subscribe(users => {
				this.users = users;
			});
	}

	addUser(event){
		event.preventDefault();
		this.usersService.addUser(this.newUser)
			.subscribe(user => {
				this.newUser = new User;
			});
	}

	deleteUser(id) {
		var users = this.users;
		this.usersService.deleteUser(id).subscribe(data => {
			if(data.n == 1){
				for(var i = 0; i < users.length; i++){
					if(users[i]._id == id){
						users.splice(i, 1);
					}
				}
			}
		});
	}
}
