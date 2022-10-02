// encapsulating the users details inside an objects.
// properties : values 
// logical code organisation

var userOne = {
    //properties : values
    email: 'ryu@ninjas.com',
    uname: 'Ryu',
    age: 20,
    gender: 'M',
    previousPurchase: "£50",
    
};

userOne.discount = "false"

var userTwo = {
    email: 'anna@mariocorp',
    uname: 'anna',
    age: 33,
    gender: 'F',
    previousPurchase: "£90"

};

var userThree = {
    email: 'catherine@ninjas.com',
    uname: 'Cat',
    age: 27,
    gender: 'F',
    previousPurchase: "£125"

};

var userFour = {
    email: 'david@hotmail.com.com',
    uname: 'David',
    age: 63,
    gender: 'M',
    previousPurchase: "£430"

};

console.log(userOne.uname)


//New style of ripped men jeans price with retail £60 
//Dresses price at £100 

var myArray = [];
myArray.push(userOne, userTwo, userThree, userFour)


// Jeans
for(let i=0; i<myArray.length; i++){
    if (myArray[i].age < 30 && myArray[i].gender =='M'){ 
    console.log(myArray[i].email);

}}

//dresses
for(let i=0; i<myArray.length; i++){
    if (myArray[i].age < 30 && myArray[i].gender =='M'){ 
    console.log(myArray[i].email);

}}


