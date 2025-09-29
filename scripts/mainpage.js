import { query, updateQuery } from "./query.js";
import { pullZoneInfo } from "../data/zoneInfo.js";
import { queryLightRequirement, updateQueryLightRequirement } from "./queryLightRequirement.js";
import { zoneColors } from "../data/zoneColors.js";



let zonesHTML = '';

zoneColors.forEach((zoneColor, index) => {
    zonesHTML += `<div class = "zone js-zone zone-${index + 1} " data-zone = ${index + 1} style = "height:50px; width:50px; background-color:rgb(${zoneColor})" >zone ${index + 1}</div> `
})

document.querySelector(".zones").innerHTML = zonesHTML;
/*
function maxZoneSelection(){
                let maxZoneSelection = 0;
            query.forEach((inquery) => {
                if (!isNaN(inquery * 2)) {
                    maxZoneSelection += 1;
                }
            })
            console.log(maxZoneSelection);
}
            */

function zoneOnclick() {

    document.querySelectorAll(".js-zone").forEach((zone) => {

        zone.addEventListener('click', () => {
            if(query.length > 1){
                if(!query.includes(zone.dataset.zone)){
                document.querySelector(".zones-selection-max").innerHTML = "You Selected the Maxmium number of Zones";
                return;
                }else{
                document.querySelector(".zones-selection-max").innerHTML = " ";

                }
            }

            updateQuery(zone.dataset.zone);
            /*
            if (maxZoneSelection <= 3) {
                updateQuery(zone.dataset.zone);
            } else {
                document.querySelector(".zones-selection-max").innerHTML = "You Selected the Maxmium number of Zones";
            }
            */
            console.log(query);
            if (zone.classList.contains('button-clicked')) {
                zone.classList.remove('button-clicked');
            } else {
                zone.classList.add('button-clicked');
            }
        })
    });


}

zoneOnclick();

document.querySelectorAll(".js-light-requirement").forEach((lightRequirement) => {
    lightRequirement.addEventListener('click', () => {
        updateQueryLightRequirement(lightRequirement.dataset.lightRequirement);
        console.log(queryLightRequirement);

        if (lightRequirement.classList.contains('button-clicked')) {
            lightRequirement.classList.remove('button-clicked');
        } else {
            lightRequirement.classList.add('button-clicked');
        }
    })
});

document.querySelector(".js-zipcode-input-button").addEventListener('click', async (event) => {

    if(document.querySelector(".js-zipcode-input-bar").value){
        document.querySelector(".js-zipcode-input-button").innerHTML = "Try a different zipcode"
    }else{
        document.querySelector(".js-zipcode-input-button").innerHTML = "Search"
    };


    try {
        const zipcodeInput = document.querySelector(".js-zipcode-input-bar").value;
        const USDAZoneInfo = await pullZoneInfo(zipcodeInput);
        const zone = USDAZoneInfo.zone[0];
        document.querySelector(".zone-search-result").innerHTML = `Your USDA zone is ${USDAZoneInfo.zone}`
    } catch {
        document.querySelector(".zone-search-result").innerHTML = "You Entered a Invalid Zipcode"
    }
})


function renderSelectedButton() {
    query.forEach((inquery) => {

            document.querySelector(`.zone-${inquery}`).classList.add('button-clicked');

    })

    queryLightRequirement.forEach((lightRequirement)=>{
            document.querySelector(`.light-requirement-${lightRequirement}`).classList.add('button-clicked');

    })


}



renderSelectedButton();

