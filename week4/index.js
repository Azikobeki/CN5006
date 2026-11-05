require('dotenv').config({ path: '../.env' });
const mongoose = require('mongoose');

async function insertOne() {
    const doc1 = new Person({
        name: 'NHQ',
        age: 32,
        gender: 'Male',
        salary: 1234
    });

    const savedDoc = await doc1.save();

    console.log('One document inserted');
    console.log(savedDoc);
}

async function insertMany() {
    const manyPersons = [
        { name: 'SimonNHQ', age: 42, gender: 'Male', salary: 3456, city: 'London'},
        { name: 'NeeshaNN', age: 53, gender: 'Female', salary: 1000, city: 'Kent' },
        { name: 'MaryNHQ', age: 27, gender: 'Female', salary: 5402, city: 'Surrey'},
        { name: 'MikeNJQ', age: 40, gender: 'Male', salary: 4519, city: 'Bristol' }
    ];

    const result = await Person.insertMany(manyPersons);

    console.log('Many documents inserted');
    console.log(result);
}

async function findPeopleByCity() {
    const docs = await Person.find({ city: 'London' });
    console.log('People from London:', docs);
}

async function findAll() {
    const docs = await Person.find({})
        .sort({ salary: 1 })
        .select('name salary age')
        .limit(100);

    console.log('Showing multiple documents');

    docs.forEach(doc => {
        console.log(doc.age, doc.name, doc.salary);
    });
}

async function findFemalesOver30() {
    const givenAge = 30;

    const docs = await Person.find({
        gender: 'Female',
        age: { $gte: givenAge }
    })
    .sort({ salary: 1 })
    .select('name salary age')
    .limit(10);

    console.log(`Females aged ${givenAge} or above:`);

    docs.forEach(doc => {
        console.log(doc.age, doc.name, doc.salary);
    });
}

async function countDocuments() {
    const count = await Person.countDocuments();
    console.log('Total Documents Count:', count);
}

async function deleteManyPersons() {
    const result = await Person.deleteMany({
        age: { $gte: 45 }
    });

    console.log('Deleted documents:', result);
}

async function updateManyPersons() {
    const result = await Person.updateMany(
        { gender: "Female" },
        { salary: 5555 }
    );

    console.log("Update successful");
    console.log(result);
}

const PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    gender: String,
    salary: Number,
    city: String
});

const Person = mongoose.model(
    'modelname',
    PersonSchema,
    'personCollection'
);

async function main() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB Atlas!');
        //await insertOne();
        //await insertMany();
        await findAll();
        await findFemalesOver30();
        await countDocuments();
        // await deleteManyPersons();
        await updateManyPersons();
        await findPeopleByCity();
    } catch (err) {
        console.error('Connection error:', err.message);
    } finally {
        await mongoose.connection.close();
        console.log('Connection closed');
    }
}

main();
