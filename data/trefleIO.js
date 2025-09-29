async function pullPlantData (zone){
    let plantDataFetch = await fetch(`https://trefle.io/api/v1/plants?token=XKha24aamK0tyJhIRGm0ud8SxB6w91dewebUV59cEmM`);
    const plantData = await plantDataFetch.json();
    console.log(plantData);
    return plantData;
}

pullPlantData();
