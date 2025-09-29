let plantData;

/*async function pullPlantData (){
    let plantDataFetch = await fetch('https://perenual.com/api/v2/species-list?key=sk-i90568bc96463597612074&hardiness=5');
    const plantData = await plantDataFetch.json();

    const blob = new Blob([JSON.stringify(plantData, null, 2)], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');

    a.href = url;
    a.download = "plants.json";
    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);

}*/

export async function pullPlantData (zone){
    let plantDataFetch = await fetch(`https://perenual.com/api/v2/species-list?key=sk-ZFp768c645f82a46412074&hardiness=${zone}`);
    const plantData = await plantDataFetch.json();
    return plantData;
}




