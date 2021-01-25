export async function getBillListAPI() {
    return await fetch('http://localhost:3001/readSheet').then(response => response.json())
}