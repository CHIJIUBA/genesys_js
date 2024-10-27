let contactBook = [];

function addContact(name, phone, email) {
    let newContact = {
        name: name,
        phone: phone,
        email: email
    };
    contactBook.push(newContact);
    console.log(`Added contact: ${name}`);
}

addContact("Alice Johnson", "123-456-7890", "alice@example.com");
addContact("Bob Smith", "987-654-3210", "bob@example.com");

function viewContacts() {
    console.log("Contact Book:");
    // contactBook.forEach(contact => {
    //     console.log(`Name: ${contact.name}, Phone: ${contact.phone}, Email: ${contact.email}`);
    // });


    // for (let contact of contactBook) {
    //     console.log(`Name: ${contact.name}, Phone: ${contact.phone}, Email: ${contact.email}`);
    // }
}

function deleteContact(name) {
    let index = contactBook.findIndex(contact => contact.name === name);
    if (index !== -1) {
        contactBook.splice(index, 1);
        console.log(`Deleted contact: ${name}`);
    } else {
        console.log(`Contact not found: ${name}`);
    }
}

