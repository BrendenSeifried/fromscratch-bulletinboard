const SUPABASE_URL = 'https://kwuprxiphonycrgvghdh.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt3dXByeGlwaG9ueWNyZ3ZnaGRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ0MzUzMzEsImV4cCI6MTk2MDAxMTMzMX0.62oTUOOAQuTrdr4remhHfeCx6BxTyHszj7IU3dya7f8';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);



export async function getName() {
    const response = await client.from('Bulletinboard').select('*');
    console.log(response);
    return checkError(response);    
}

// export async function getPlane(id) {
//     const planeID = await client.from('Bulletinboard').select('*').eq('id', id).single();
//     console.log(planeID);
//     return checkError(planeID);    
// }

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}







//---------------------------------------------From why-i-auth----------------
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
        location.replace('./createpage');
    }
}

export async function logout() {
    await client.auth.signOut();
    return (window.location.href = '../index.html');
        
}