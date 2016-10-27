'use strict'

const assert = require('assert');
const controller = require('../controllers/palindromeController');

describe('Palindrome', function() {

	let status;
	const mockRes = {
		status: (code) => {
			status = code;
			return mockRes;
		},
		send: () => {
			return mockRes;
		}
	}

	beforeEach(() => {
		status = null;

	});

	describe('Verify', () => {
		it('ABA case should be a palindrome', () => {
			controller.isPalindrome({body: {stringToVerify:"ABA"}}, mockRes, () => {
				assert.equal(status, 200);
			});
		});

		it('ABBA case should be a palindrome', () => {
			controller.isPalindrome({body: {stringToVerify:"ABBA"}}, mockRes, () => {
				assert.equal(status, 200);
			});
		});

		it('BBBB case should be a palindrome', () => {
			controller.isPalindrome({body: {stringToVerify:"BBBB"}}, mockRes, () => {
				assert.equal(status, 200);
			});
		});

		it('1010 case should not be a palindrome', () => {
			controller.isPalindrome({body: {stringToVerify:"1010"}}, mockRes, () => {
				assert.equal(status, 400);
			});
		});
	});
});