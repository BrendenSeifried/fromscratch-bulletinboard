import { signupUser, redirectIfLoggedIn, signInUser } from '../fetch-utils.js';

const signUpForm = document.getElementById('sign-up');
const signUpEmail = document.getElementById('sign-up-email');
const signUpPassword = document.getElementById('sign-up-password');

const signInForm = document.getElementById('sign-in');
const signInEmail = document.getElementById('sign-in-email');
const signInPassword = document.getElementById('sign-in-password');

// Wire up sign in and sign up forms to supabase
// Redirect to /other-page on successful auth
// Redirect to /other-page when page loads if user is authenticated

//const user = await getUser();


signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const user = await signupUser(signUpEmail.value, signUpPassword.value);
    console.log(user);
    if (user) {
        redirectIfLoggedIn();
    } else {
        console.error(user);
    }
});

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const user = await signInUser(signInEmail.value, signInPassword.value);

    if (user) {
        redirectIfLoggedIn();
    } else {
        console.error(user);
    }
   
});