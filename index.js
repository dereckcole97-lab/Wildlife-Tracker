/*

In this workshop, you will build a simple wildlife tracker using JavaScript objects.

Here is an example of an object:

const animal = {}; // empty object
This creates an empty object.

Now create a variable named tiger and assign it an empty object.

For this wildlife tracker, you will update an object with new properties.

Now update the tiger object so it includes a property called species.

Set its value to "Tiger".

Now update your tiger object by adding a new property called age.

Set the age property to the value 5.

Now add another property to the tiger object called isEndangered.

Set the isEndangered property to true.

Now create a second object called elephant.

Add the following properties:

species with the value "Elephant"
age with the value 10
isEndangered with the value true

In this step, you will create a function to access the species property of an object.

Here is a small example of accessing a property from an object:

Now create a function called getSpecies.

The function should take one parameter named animal.

Return the species property of the animal using dot notation.

After creating the function, use console.log to call getSpecies(tiger) so you can see the result in the console.


In this step, you will create a function to access the age property of an object.


Now create a function called getAge.

The function should take one parameter named animal.

Return the age property of the animal using dot notation.

After creating the function, use console.log to call getAge(tiger) so you can see the result in the console.

Now create a function called addHabitat. The function should take two parameters: animal and habitat.

Inside the function, add a new property called habitat to the animal object. Set its value equal to the habitat parameter.

Return the updated animal object.

After creating the function, use console.log to call addHabitat(tiger, "Rainforest") so you can see the updated tiger object in the console.

Now create a function called updateAge. The function should take two parameters: animal and newAge.

Inside the function, update the age property of the animal object to newAge. Return the updated animal object.

After creating the function, use console.log to call updateAge(elephant, 12) so you can see the updated elephant object in the console.

Now create a function called removeEndangeredStatus. The function should take one parameter named animal.

Inside the function, remove the isEndangered property from the animal object using the delete keyword. Return the updated animal object.

After creating the function, use console.log to call removeEndangeredStatus(tiger) so you can see the updated object in the console.

Now create a function called hasHabitat. The function should take one parameter named animal.

Use the hasOwnProperty method to return true if the animal object has a property called "habitat" and false otherwise.

After creating the function, use console.log to call hasHabitat(tiger) and hasHabitat(elephant) so you can see both results in the console.

Now create a function called getProperty.

The function should take two parameters: animal and propertyName.

Return the value of the property using bracket notation.

After creating the function, use console.log to call getProperty(tiger, "species") and getProperty(elephant, "age") so you can see the returned values in the console.

*/
const tiger = {
    species: "Tiger",
    age: 5,
    isEndangered: "true"
};
tiger.isEndangered = true;

const elephant = {
  species: "Elephant",
  age: 10,
  isEndangered: "true"
};
elephant.isEndangered = true;

function getSpecies(animal) {
  return animal.species;
  console.log(getSpecies(tiger));
}
function getAge(animal) {
  return animal.age;
  console.log(getAge(tiger));
}
function addHabitat(animal, habitat) {
  animal.habitat = habitat;
  return animal;
}
console.log(addHabitat(tiger, "Rainforest"));

function updateAge(animal, newAge) {
  animal.age = newAge;
  return animal;
}
console.log(updateAge(elephant, 12));

function removeEndangeredStatus(animal) {
  delete animal.isEndangered;
  return animal;
}
console.log(removeEndangeredStatus(tiger));

function hasHabitat(animal) {
  if(animal.hasOwnProperty("habitat")){
    return true;
  }else {
    return false;
  }
}
console.log(hasHabitat(tiger)); 
console.log(hasHabitat(elephant));

function getProperty(animal, propertyName) {
  return animal[propertyName];
}
console.log(getProperty(tiger, "species"));
console.log(getProperty(elephant, "age"));