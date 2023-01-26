let signupName = document.getElementById('signupName');
let signupEmail = document.getElementById('signupEmail');
let signupPass = document.getElementById('signupPass');
let signupBTN = document.getElementById('signupBTN');

//  Loging in vars
let loginEmail = document.getElementById('loginEmail');
let loginPassword = document.getElementById('loginPassword');
let loginBTN = document.getElementById('loginBTN');
let logOutBTN = document.getElementById('logOutBTN');
//  ============= SIGN UP ================

let signUpInfo = [];
if (localStorage.getItem('usersAccounts') != null) {
	signUpInfo = JSON.parse(localStorage.getItem('usersAccounts'));
}

// SINING UP FUNCTION
function signingUp() {
	if (nameRegex() == true) {
		let userInfo = {
			name: signupName.value,
			email: signupEmail.value,
			pass: signupPass.value,
		};
		signUpInfo.push(userInfo);
		localStorage.setItem('usersAccounts', JSON.stringify(signUpInfo));
		document
			.getElementById('invalidEmail')
			.classList.replace('d-block', 'd-none');
		document.getElementById('regComplete').classList.remove('d-none');
	}
}

// FUNCTION TO CHECK IF THE EMAIL ALREADY EXISTS
function emailExists() {
	let result = false;
	for (i = 0; i < signUpInfo.length; i++) {
		if (signupEmail.value == signUpInfo[i].email) {
			result = true;
			document.getElementById('regComplete').classList.add('d-none');
			document
				.getElementById('invalidEmail')
				.classList.replace('d-none', 'd-block');
		}
	}
	if (result == false) {
		signingUp();
	}
}

// LOGINING IN FUNCTION
let currentName;
function logIn() {
	let canAccess = false;
	for (i = 0; i < signUpInfo.length; i++) {
		if (
			signUpInfo[i].email == loginEmail.value &&
			signUpInfo[i].pass == loginPassword.value
		) {
			currentName = signUpInfo[i].name;
			localStorage.setItem('userName', new String(currentName));
			canAccess = true;
		}
	}
	if (canAccess == true) {
		window.location.href = 'index.html';
	} else {
		window.alert('Sign Up First');
	}
}

// WELCOME MESSAGE DISPLAYING USER NAME
if (document.getElementById('headTitle').textContent == 'homePage') {
	document.getElementById('memberName').innerHTML =
		localStorage.getItem('userName');
	if (localStorage.getItem('userName') == null) {
		window.location.href = 'signin.html';
	}
}

// ADDING EVENTS TO BUTTON BASED ON THE PAGE
if (loginBTN != null) {
	loginBTN.addEventListener('click', logIn);
} else if (signupBTN != null) {
	signupBTN.addEventListener('click', emailExists);
} else if (logOutBTN != null) {
	logOutBTN.addEventListener('click', function () {
		window.location.href = 'signin.html';
		localStorage.removeItem('userName');
	});
}

// REGEX FUNCTIONS
function nameRegex() {
	let regex = /^([\w]{1,50})/;
	if (
		regex.test(signupName.value) &&
		regex.test(signupEmail.value) &&
		regex.test(signupPass.value) == true
	) {
		document
			.getElementById('invalidName')
			.classList.replace('d-block', 'd-none');
		console.log('Name Is Ok');
		return true;
	} else {
		document
			.getElementById('invalidName')
			.classList.replace('d-none', 'd-block');
		console.log('Name Is Not Okay');
		return false;
	}
}
