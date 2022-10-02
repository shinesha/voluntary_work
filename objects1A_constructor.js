// object constructor. It is a template for us to create objects.
function Person(email, uname, age, gender, previousPurchase) {

    this.email = email,
    this.uname = uname,
    this.age = age,
    this.gender= gender,
    this.previousPurchase = previousPurchase
  }



// USE CONSTRCUTOR TO BUILD OBJECTS QUICKLY
const personOne = new Person('ryu@ninjas.com', 'ryu', 20, "M", "£50");
//const personTwo = new Person('anna@mariocorp.com', 'anna', 33, "F", "£90" );

const personThree = Person('anna@mariocorp.com', 'anna', 33, "F", "£90" );


//GET THE VALUE
valueOfLastPurchase = personThree.previousPurchase

console.log(valueOfLastPurchase)

//SET THE VALUE
// personOne.previousPurchase = "£70"

// console.log(personOne.previousPurchase)