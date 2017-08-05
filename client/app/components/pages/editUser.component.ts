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
  private passConfirmation: String;
  private loaded: boolean;

	constructor(private usersService: UsersService){
		this.init();
    
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
            this.currentUser.password = "";
            this.passConfirmation = "";
            this.loaded = true;
					}
				},
				err => {
          window.location.replace('./');
				});
	}


 

}

