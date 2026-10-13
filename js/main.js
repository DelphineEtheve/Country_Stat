
console.log("Main script loaded.");
import { loadData } from "./data.js";
import { countDances } from "./statistics.js";

async function init() {
    
    const dances = await loadData();
    console.table(dances);
    const counts = countDances(dances);

    console.log(counts);
}

init();