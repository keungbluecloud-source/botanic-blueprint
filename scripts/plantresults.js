import { pullPlantData } from "../data/plantAPI.js";
import { query } from "./query.js";
import { pullPlantDetails } from "../data/pullPlantDetails.js";
import { renderPlantDetails } from "./renderPlantDetails.js";
import { zoneColors } from "../data/zoneColors.js";

console.log(zoneColors);

let resultHTML = '';

export async function renderPlantResult() {
     for (const zone of query) {
          resultHTML += `<div class = "zone-result zone-result-${zone}" style="background-color: rgb(${zoneColors[zone-1]})"> This is the result for zone ${zone}: </div>`
          const plantData = await pullPlantData(zone);
          plantData.data.forEach((plant) => {
               let plantFamilyHtml = '';
               if (plant.family) {
                    plantFamilyHtml = ` <div class = "plant-family" > 
               Plant Family: ${plant.family}
                </div> `;
               }

               if (plant.default_image) {
                    resultHTML += `<div class = "each-plant"> 

               <div class = "plant-name">
              Plant Name: <br>  ${plant.common_name}
              </div> 

             ${plantFamilyHtml}

              <div class = "plant-image-container"> 
              <img class = "plant-image" src="${plant.default_image?.medium_url || ''}"> 
              </div> 

              <div class = "scientific_name"> 
              Plant Scientific Name: <br>
               ${plant.scientific_name}
              </div>

              <div class = "view-more-button" data-plantid = ${plant.id} > View More </div> 
               
               
          </div> `
               }

          
          
          })


     }

     console.log(`this is the resultHTML: ${resultHTML}`);

}

async function renderPlantResultwithViewMoreButton() {
     await renderPlantResult();
     document.querySelector(".plant-result").innerHTML = resultHTML;
     document.querySelectorAll(".view-more-button").forEach((button) => {
          const plantID = button.dataset.plantid;
          button.addEventListener("click", async () => {
               document.querySelector(".single-plant-result").style.display = 'block';
               console.log(await pullPlantDetails(plantID));
               document.querySelector(".single-plant-result-text").innerHTML = await renderPlantDetails(plantID);
          })
     });

}

renderPlantResultwithViewMoreButton()


document.querySelector(".js-return-button").addEventListener('click', () => {
     window.localStorage.removeItem('query');
     console.log(query);
})



