import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/User';

@Component({
  moduleId: module.id,
  selector: 'edit-user',
  templateUrl: '../../../../templates/editUser.component.html'
})

export class EditUserComponent {
  private currentUser: User;
  private newPasswordConfirmation: String;
  private oldPassword: String;
  private oldPasswordConfirmation: String;
  private loaded: boolean;
  private updateUserData: Object;

	constructor(private usersService: UsersService){
		this.init();
		this.currentUser.password = "";
    
	}

	init(){
		this.loaded = false;
    	this.getCurrentUser();

	}

	getCurrentUser(){
		this.usersService.getLoggedUser()
			.subscribe(
				res => {
					if (res){
						this.currentUser = res;
            console.log(this.currentUser);
            //this.oldPassword = this.currentUser.password;
            this.loaded = true;
            console.log(this.oldPassword);
					}
				},
				err => {
          window.location.replace('./');
				});
	}

	

	updateUser(event){
		event.preventDefault();
		//if(this.oldPassword == this.oldPasswordConfirmation){
			if(this.newPasswordConfirmation == this.currentUser.password){
				this.usersService.updateUser(this.currentUser)
					.subscribe(
					res => {
						this.init();
						alert("User updated successfully!");
					},
					err => {
						alert(err._body);
					});
			}
			else {
				alert("Wrong new password confirmation");
			}
		//}	
		//else{
			//alert("Wrong old password confirmation");
		//}
	}


}

