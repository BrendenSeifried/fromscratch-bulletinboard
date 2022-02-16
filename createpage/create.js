// import { checkAuth, logout } from '../fetch-utils.js';

// checkAuth();

// const logoutBtn = document.getElementById('logout');

// logoutBtn.addEventListener('click', () => {
//     logout();
// });


import { checkAuth, logout } from '../fetch-utils.js';

checkAuth();

const logoutBtn = document.getElementById('logout');

logoutBtn.addEventListener('click', () => {
    logout();
});
