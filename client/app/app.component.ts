import { Component } from '@angular/core';

import { PalindromeService } from './services/PalindromeService';

@Component({
	moduleId: module.id,
	selector: 'my-app',
	templateUrl: 'app.component.html',
	providers: [ PalindromeService ]
})
export class AppComponent { 
	stringToVerify : string;
	isPolindrome = false;
	needToSearch = true;

	private lastSearchedString : string;

	constructor(private palindromeService : PalindromeService) {

	}

	verifyString() {
		this.palindromeService.isPalindrome(this.stringToVerify).subscribe(
			(result) => {
				this.lastSearchedString = this.stringToVerify;
				this.needToSearch = false;
				this.isPolindrome = true;
			},
			(error) => {
				this.lastSearchedString = this.stringToVerify;
				this.needToSearch = false;
				this.isPolindrome = false;
			}
		);
	}

	onKey(value: string) {
    	this.needToSearch = this.lastSearchedString !== this.stringToVerify;
  	}
}