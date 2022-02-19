import { checkAuth, logout, createStuff } from '../fetch-utils.js';

checkAuth();
const toopForm = document.getElementById('toop');
const goHome = document.getElementById('go-home');




toopForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const toopData = new FormData(toopForm);
    const name = toopData.get('name');
    const date = toopData.get('date');
    const info = toopData.get('info');
    await createStuff(name, date, info);
    return (window.location.href = '../index.html');
  
});


goHome.addEventListener('click', () =>)

const logoutBtn = document.getElementById('logout');

logoutBtn.addEventListener('click', () => {
    
    logout();
});
