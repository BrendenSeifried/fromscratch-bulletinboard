// import { checkAuth, logout } from '../fetch-utils.js';

// checkAuth();

// const logoutBtn = document.getElementById('logout');

// logoutBtn.addEventListener('click', () => {
//     logout();
// });


import { checkAuth, logout, createStuff } from '../fetch-utils.js';

checkAuth();
const toopForm = document.getElementById('toop');
// const name = document.getElementById('Name');
// const date = document.getElementById('Date');
// const info = document.getElementById('Info');



toopForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const toopData = new FormData(toopForm);
    //const toop = toopData.get('type');
    const name = toopData.get('name');
    const date = toopData.get('date');
    const info = toopData.get('info');
   // console.log(toop, 'test');
    await createStuff(name, date, info);
  
});

// Name.addEventListener('submit', async (e) => {
//     e.preventDefault();
    
//     const nameData = new FormData(Name);
//     const name2 = nameData.get('Name');
//     const Date = nameData.get('date');
//     //console.log(toop, 'test');
//     await createStuff(name2, Date);
  
// });

const logoutBtn = document.getElementById('logout');

logoutBtn.addEventListener('click', () => {
    
    logout();
});

const checkBtn = document.getElementById('check');

checkBtn.addEventListener('click', () => {
    return (window.location.href = '../index.html');
});
