'use strict'

module.exports.isPalindrome = (req, res, next) => {
	const string = req.body.stringToVerify;

	if (!string) {
		res.status(400).send();
		return next();
	}

	let isPalindrome = false;
	let invertedIndex = string.length;
	for (let i = 0; i < string.length; i++) {
		if (string[i] != string[--invertedIndex]) {
			isPalindrome = false;
			break;
		}
		isPalindrome = true;
	}

	if (isPalindrome) {
		res.status(200).send();
		return next();
	}

	res.status(400).send();
	return next();
};