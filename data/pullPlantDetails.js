 export async function pullPlantDetails(plantID){
    let plantDataFetch = await fetch(`https://perenual.com/api/v2/species/details/${plantID}?key=sk-ZFp768c645f82a46412074`);
    const plantData = await plantDataFetch.json();
    return plantData;
}