/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Noah Mkono";
const currentYear = "2024";
const profilePicture = "images/nobility_image.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `This is ${fullName}. He is a an online student at BYU-Idaho.`)

/* Step 5 - Array */
let favoriteFoods = ["Sadza", "Mopane worms", "Termites", "Pork", "Cassava", "Sweet Potato", "Leafy Vegetables"];

foodElement.innerHTML = favoriteFoods;
let newFood = "Beef";
favoriteFoods.push(newFood);
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;


