let house = {
  address: "1 Kinning Park",
  previousOwners: ["Claire M.", "John A."],
  currentOwner: {
    firstName: "Margaret",
    lastName: "Conway",
  },
};

/*
  DO NOT EDIT ANYTHING ABOVE THIS LINE

  WRITE YOUR CODE BELOW
*/
house.address = "51 Berkley";
house.previousOwners = ["Brian M.", "Fiona S."];
house.currentOwner.lastName = "Montgomery";

// - change the address of "house" to '51 Berkley Road'
// - change the previous owners of "house" to ["Brian M.", "Fiona S."]
// - change the last name of the current owner of "house" to "Montgomery"

/*
  DO NOT EDIT ANYTHING BELOW THIS LINE
*/

console.log(
  `Expected result: 51 Berkley Road. Actual result: ${house.address}`
);
console.log(
  `Expected result: Brian M., Fiona S. Actual result: ${house.previousOwners.toString()}`
);
console.log(
  `Expected result: Montgomery. Actual result: ${house.currentOwner.lastName}`
);

////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
let house1 = {
  address: "1 Kinning Park",
  previousOwners: ["Claire M.", "John A."],
  currentOwner: {
    firstName: "Margaret",
    lastName: "Conway",
  },
};

let newCurrentOwner = {
  firstName: "Georgina",
  lastName: "Hernandez",
};

/*
    DO NOT EDIT ANYTHING ABOVE THIS LINE
  
    WRITE YOUR CODE BELOW
  */
house1.currentOwner=newCurrentOwner

house1.previousOwners.pop();
house1.previousOwners.push("stephen B.");

house1.isForSale = "false";
// - assign the value of the variable 'newCurrentOwner' as the value to the house's "currentOwner"
// - from the list of previous owners, replace only "John A." with "Stephen B."
// - give the house a new property called 'isForSale' with the value 'false'

/*
    DO NOT EDIT ANYTHING BELOW THIS LINE
  */
console.log(
  `Did you correctly assign the new owner using the given variable?","Expected result: true. Actual result: " ${
    house1.currentOwner === newCurrentOwner
  }`
);
console.log(
  `Expected result: Claire M., Stephen B. Actual result: ${house1.previousOwners.toString()}`
);
console.log(`Expected result: false. Actual result: ${house1.isForSale}`);
