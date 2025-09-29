export let queryLightRequirement = JSON.parse(localStorage.getItem('queryLightRequirement')) || [];


export function updateQueryLightRequirement(data) {


    console.log(`trying to push ${data}`);
    let stored = false;
    console.log(`initial: in query the query is ${queryLightRequirement

    }`);
    console.log(`stored: ${stored}`);
    
    /*Object description: 
        input might be string or number,
        input might be duplicate
        stored data can not have duplicates; 
        => group data into number and string. 
    */

    if (queryLightRequirement.length === 0) {
        queryLightRequirement.push(data);
        localStorage.setItem('queryLightRequirement', JSON.stringify(queryLightRequirement));
        return; 
    } else{
        queryLightRequirement.forEach((item) => {
            if (data === item) {
                stored = true;
            }
        });
    }

    console.log(`first-loop: in query the query is ${queryLightRequirement}`);
    console.log(`stored: ${stored}`);
    
    if (stored) {
        queryLightRequirement.splice(0, queryLightRequirement.length, ...queryLightRequirement.filter(item => item !== data));
    } else {
        queryLightRequirement.push(data);
    }
    localStorage.setItem('queryLightRequirement', JSON.stringify(queryLightRequirement));

    console.log(`second-loop: in query the query is ${queryLightRequirement}`);
    console.log(`stored: ${stored}`);

}