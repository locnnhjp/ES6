const myAnimal = new Set();

// Add animal
function addAnimal(animalName) {
    myAnimal.add(animalName.toLowerCase());
}
// Check animal is exist
function isAnimalExist(animalName) {
    let result = false;
    myAnimal.forEach(animal => {
        console.log(animal);
        if (animalName.toLowerCase() === animal.toLowerCase()) {
            result =  true;
        }
    })
    return result;

}

// Delete animal
function deleteAnimal(animalName) {
    if (isAnimalExist(animalName)) {
        myAnimal.delete(animalName.toLowerCase());

    }
}

addAnimal("Tiger");
addAnimal("LION");
console.log(myAnimal);
console.log(isAnimalExist("Tiger"));
deleteAnimal("TIGER");
console.log(myAnimal);