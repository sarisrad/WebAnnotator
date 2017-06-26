import { Component } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: '/../templates/app.component.html',
  providers:[ UsersService ]
})

export class AppComponent { }
