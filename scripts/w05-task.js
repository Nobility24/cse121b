/* W05: Programming Tasks */

/* Declare and initialize global variables */
//Declare a const variable named templesElement that references the HTML div element that eventually will be populated with temple data.Declare a global empty array variable to store a list of temples named templeList.
const templesElement = document.querySelector("#temples");
var templeList = [];

/* async displayTemples Function */

const displayTemples = (temples) => {
    templesElement.innerHTML = '';

    temples.forEach((temple) => {
        const article = document.createElement("article");
    
        const h3 = document.createElement("h3");
        h3.innerText = temple.templeName;
    
        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.location;
    
        article.appendChild(h3);
        article.appendChild(img);
    
        templesElement.appendChild(article);
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    try {
        const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
        templeList = await response.json();

        displayTemples(templeList);
        }   catch{

        }
};

/* reset Function */

const reset = () => {
    templesElement.innerHTML = '';
};

/* filterTemples Function */

const sortBy = (temples) =>{
    reset();
    const filter = document.querySelector("#sortBy").ariaValueMax;

    switch(filter) {
        case "utah":
            displayTemples(temples.filter((temple) => temple.location.includes('Utah')));
            break;
        case 'notutah':
            displayTemples(temples.filter((temple) => !temple.location.includes('Utah')));
            break;
        case 'older':
            const olderTemples = temples.filter((temple) => {
                const dedicatedDate = new Date(temple.dedicated);
                return dedicatedDate < new Date(1950, 0, 1);
            });
            displayTemples(olderTemples);
            break;
        case 'all':
            default:
            displayTemples(temples);
            break;
    }
}

getTemples();

/* Event Listener */

document.querySelector('#sortBy').addEventListener('change', () => {sortBy(templeList);});
