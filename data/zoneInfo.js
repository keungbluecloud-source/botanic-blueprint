export async function pullZoneInfo (zipcode){
    try{let zoneInfoFetch = await fetch(`https://phzmapi.org/${zipcode}.json`);
    const zoneData = await zoneInfoFetch.json();
    return zoneData;
    }catch{
        console.log('wrong zipcode');
    }
}
