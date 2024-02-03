/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {};

/* Populate Profile Object with placesLive objects */
myProfile.name = "Noah Mkono";
myProfile.photo = "images/nobility_image.jpg";
myProfile.favoriteFoods = ["Sadza", "Beef", "Pork", "Okra", "Covo"];
myProfile.hobbies = ["cooking", "writing", "reading", "movies"]

// Adding placesLived array with additional objects
myProfile.placesLived = [
    { place: "Harare Zimbabwe", length: "17 years" },
    { place: "Blantyre Malawi", length: "9 years" },
    { place: "Port Elizabeth South Africa", length: "7 years" },
    { place: "Cape Town South Africa", length: "8 years" }
  ];

/* DOM Manipulation - Output */

/* Name */
// Assigning value to the HTML element with ID 'name'
document.getElementById("name").textContent = myProfile.name;

/* Photo with attributes */
// Assigning value to the src attribute and alt attribute of the HTML <img> with ID 'photo'
let photoElement = document.getElementById("photo");
photoElement.src = myProfile.photo;
photoElement.alt = myProfile.name;

/* Favorite Foods List*/
// Iterating over favoriteFoods array and appending <li> elements to the HTML <ul> with ID 'favorite-foods'
let favoriteFoodsList = document.getElementById("favorite-foods");
myProfile.favoriteFoods.forEach(food => {
  let liElement = document.createElement("li");
  liElement.textContent = food;
  favoriteFoodsList.appendChild(liElement);
});

/* Hobbies List */
// Assuming 'hobbies' property is defined in myProfile object
if (myProfile.hobbies) {
    let hobbiesList = document.getElementById("hobbies");
    myProfile.hobbies.forEach(hobby => {
      let liElement = document.createElement("li");
      liElement.textContent = hobby;
      hobbiesList.appendChild(liElement);
    });
  }

/* Places Lived DataList */
// Iterating over placesLived array and appending <dt> and <dd> elements to the HTML <dl> with ID 'places-lived'
let placesLivedList = document.getElementById("places-lived");
myProfile.placesLived.forEach(place => {
  let dtElement = document.createElement("dt");
  dtElement.textContent = place.place;

  let ddElement = document.createElement("dd");
  ddElement.textContent = place.length;

  placesLivedList.appendChild(dtElement);
  placesLivedList.appendChild(ddElement);
});
