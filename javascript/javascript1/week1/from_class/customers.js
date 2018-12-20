let customers = [];

customers.push({name: "John", forename:'X', city: 'Copenhsgen'});
customers.push({name: "John", forename:'Y', city: "Malmo"});
customers.push({name: "John", forename:'M', city: 'Oslo'});

for (let i=0; i < customers.length; i++) {
    console.log (customers[i].city)
}

function getPerson ( firstName, lastName) {
    const person = {
        firstName: firstName,
        lastName: lastName,
    };

    return person;
}

console.log (getPerson('Ksu', 'Zar'));