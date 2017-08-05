import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http'
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UsersService {
	constructor(private http:Http){
	}

	getUsers(){
		return this.http.get('/api/users')
			.map(res => res.json());
	}

	addUser(newUser) {
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post('/api/users', JSON.stringify(newUser), {headers: headers})
			.map(res => res.json());
	}

	deleteUser(id){
		return this.http.delete('/api/users/'+id)
			.map(res => res.json());
	}

	loginUser(userDetails){
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post('/api/login', JSON.stringify(userDetails), {headers: headers})
			.map(res => this.handleErrorsAndContinue(res));
	}

	getLoggedUser(){
		return this.http.get('/api/login')
			.map(res => res.json())
	        .catch(e => {
	            if (e.status === 401) {
	            	console.log(e);
	                return Observable.throw('Unauthorized');
	            }
	            // do any other checking for statuses here
	        });	}

	logOutUser(){
		return this.http.delete('/api/login')
			.map(res => res.json());
	}
}