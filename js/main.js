let loginEmail = document.getElementById('loginEmail');
let loginPass = document.getAnimations('loginPass');
let loginBTN = document.getElementById('loginBTN');

let usersInfo = [];

usersInfo = JSON.parse(localStorage.getItem('usersAccounts'));

console.log(usersInfo);

function logingIn() {
	// let emailChecking = false;
	for (i = 0; i < usersInfo.length; i++) {
		if (loginEmail.value == usersInfo[i].email && loginPass.value == usersInfo[i].pass) {
			console.log('Email Mwgod');
		} else {
			console.log('Email Me4 Mwgod');
		}
	}

	// if (emailChecking == false) {
	// 	console.log('Email Mesh mwgod');
	// }
}

loginBTN.addEventListener('click', logingIn);
