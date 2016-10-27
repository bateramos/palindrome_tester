'use strict'

const assert = require('assert');
const controller = require('../controllers/palindromeController');

describe('Palindrome', function() {

	let status;
	let verify;
	const mockRes = {
		status: (code) => {
			status = code;
			return mockRes;
		},
		send: () => {
			verify();
			return mockRes;
		}
	}

	beforeEach(() => {
		status = null;
		verify = () => {};
	});

	describe('Verify', () => {
		it('ABA case should be a palindrome', () => {
			verify = () => {
				assert.equal(status, 200);
			};

			controller.isPalindrome({body: {stringToVerify:"ABA"}}, mockRes);
		});

		it('ABBA case should be a palindrome', () => {
			verify = () => {
				assert.equal(status, 200);
			};

			controller.isPalindrome({body: {stringToVerify:"ABBA"}}, mockRes);
		});

		it('BBBB case should be a palindrome', () => {
			verify = () => {
				assert.equal(status, 200);
			};

			controller.isPalindrome({body: {stringToVerify:"BBBB"}}, mockRes);
		});

		it('1010 case should not be a palindrome', () => {
			verify = () => {
				assert.equal(status, 400);
			};

			controller.isPalindrome({body: {stringToVerify:"1010"}}, mockRes);
		});
	});
});