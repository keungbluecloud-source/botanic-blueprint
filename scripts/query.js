export let query = JSON.parse(localStorage.getItem('query')) || [];


export function updateQuery(data) {


    console.log(`trying to push ${data}`);
    let stored = false;
    console.log(`initial: in query the query is ${query}`);
    console.log(`stored: ${stored}`);
    
    /*Object description: 
        input might be string or number,
        input might be duplicate
        stored data can not have duplicates; 
        => group data into number and string. 
    */

    if (query.length === 0) {
        query.push(data);
        localStorage.setItem('query', JSON.stringify(query));
        return; 
    } else{
        query.forEach((item) => {
            if (data === item) {
                stored = true;
            }
        });
    }

    console.log(`first-loop: in query the query is ${query}`);
    console.log(`stored: ${stored}`);
    
    if (stored) {
        query.splice(0, query.length, ...query.filter(item => item !== data));
    } else {
        query.push(data);
    }
    localStorage.setItem('query', JSON.stringify(query));

    console.log(`second-loop: in query the query is ${query}`);
    console.log(`stored: ${stored}`);

}