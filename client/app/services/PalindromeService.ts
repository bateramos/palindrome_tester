import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PalindromeService {
	constructor(private http: Http) {

	}

	isPalindrome(string) {
		return this.http.post('/api/verify', {stringToVerify: string});
	}
}
