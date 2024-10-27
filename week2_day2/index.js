const person = {
    age: 20,
    name: "Ibrahim",
    gender: "Male",
    country: "Nigeria",
    greet: function() {
        console.log("Hello");
    },
    eat: function() {
        console.log("I am eating");
    }
}

// person.greet();
// person.eat();


// let us build a contact list

// function that creates an object

let contactList = [];

function addContact(contactName, contactPhone, contactEmail) {
    const contact = {
        name: contactName,
        phone: contactPhone,
        email: contactEmail
    }

    contactList.push(contact);
    console.log(`${contactName} has been added to contact list`);
}


addContact("Amara", "08132564787", "johndoe@example.com");
addContact("Zion", "08145367854", "zion@example.com");

function viewContactList() {
    for (let contact of contactList) {
        console.log(`Name: ${contact.name}, Phone: ${contact.phone}, Email: ${contact.email}`)
    }
}

viewContactList();


// for (let key in person) {
//     console.log(`${key}: ${person[key]}`);
// }

// console.log(person["age"]);
// console.log(person["country"]);
// console.log(person["name"]);


// adding to object 
person.height = 7.6;
person.country = "Ghana";

delete person["gender"];
// console.log(person.country);


// const user = {
//     username: "jsmith",
//     email: "jsmith@example.com",
//     address: {
//         street: "123 Main St",
//         city: "Anytown",
//         zip: "12345"
//     }
// };





