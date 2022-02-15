const SUPABASE_URL = 'https://kwuprxiphonycrgvghdh.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt3dXByeGlwaG9ueWNyZ3ZnaGRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ0MzUzMzEsImV4cCI6MTk2MDAxMTMzMX0.62oTUOOAQuTrdr4remhHfeCx6BxTyHszj7IU3dya7f8';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getPlanes() {
    const response = await client.from('Bulletinboard').select('*');
    console.log(response);
    return checkError(response);    
}

export async function getPlane(id) {
    const planeID = await client.from('Bulletinboard').select('*').eq('id', id).single();
    console.log(planeID);
    return checkError(planeID);    
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}