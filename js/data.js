export async function loadData() {
    console.log("Loading data...");
    const response = await fetch("./data/danses.json");

    return await response.json();
}