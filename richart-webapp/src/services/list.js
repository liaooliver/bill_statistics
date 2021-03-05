export async function getBillListAPI() {
    return await fetch('readSheet').then(response => response.json())
}