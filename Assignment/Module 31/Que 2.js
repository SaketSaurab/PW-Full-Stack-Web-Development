let contactMap = new Map();

contactMap.set('Amit', {
    name: 'Amit',
    age: 28,
    email: 'amit@example.com',
    location: 'Mumbai'
});
contactMap.set('Priya', {
    name: 'Priya',
    age: 24,
    email: 'priya@example.com',
    location: 'Delhi'
});
contactMap.set('Rahul', {
    name: 'Rahul',
    age: 32,
    email: 'rahul@example.com',
    location: 'Bangalore'
});

function getContactDetails(name) {
    if (contactMap.has(name)) {
        return contactMap.get(name);
    } else {
        return `No contact found for ${name}`;
    }
}

console.log(getContactDetails('Amit'));
console.log(getContactDetails('Priya'));
console.log(getContactDetails('Vikas'));
