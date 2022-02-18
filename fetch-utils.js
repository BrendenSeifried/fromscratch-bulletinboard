const SUPABASE_URL = 'https://kwuprxiphonycrgvghdh.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt3dXByeGlwaG9ueWNyZ3ZnaGRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ0MzUzMzEsImV4cCI6MTk2MDAxMTMzMX0.62oTUOOAQuTrdr4remhHfeCx6BxTyHszj7IU3dya7f8';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getNotes() {
    const response = await client.from('bulletboard').select('*');
    //console.log(response);
    return checkError(response);    
}


function checkError({ data, error }) {
    return error ? console.error(error) : data;
}

//------------------------------------Sign in Sign up stuff---------

export function getUser() {
    return client.auth.session() && client.auth.session().user;
    //if (!user) location.replace('../'); 
}

export async function signupUser(email, password) {
    const test = await client.auth.signUp({ email: email, password: password });
    return test.user;
}


export async function signInUser(email, password) {
    const signUsr = await client.auth.signIn({ email: email, password: password });
    return signUsr.user;
}

export async function checkAuth() {
    const user = await getUser();

    if (!user) location.replace('../authpage'); 
}

export async function redirectIfLoggedIn() {
    if (await getUser()) {
        location.replace('../createpage');
    }
}

export async function createStuff(stuff, stuff2, stuff3) {
    const response = await client.from('bulletboard').insert({ name: stuff, date: stuff2, info: stuff3 });
    console.log(response, 'testing');
    return checkError(response);
}

export async function logout() {
    await client.auth.signOut();
    return (window.location.href = '../index.html');
        
}
