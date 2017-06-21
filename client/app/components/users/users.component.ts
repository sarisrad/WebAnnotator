import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../../models/User';


@Component({
  moduleId: module.id,
  selector: 'users',
  templateUrl: 'users.component.html',
  providers:[]
})

export class UsersComponent {
	users: User[];
	username: string;
	email: string;
	password: string;

	constructor(private usersService:UsersService){
		this.usersService.getUsers()
			.subscribe(users => {
				this.users = users;
			});
	}

	addUser(event){
		event.preventDefault();
		var newUser = {
			name: this.username,
			password: "this.password",
			email: "this.email"
		}
		this.usersService.addUser(newUser)
			.subscribe(user => {
				this.users.push(user);
				this.username = "";
				this.password = "";
				this.email = "";
				console.log(this.users);
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
