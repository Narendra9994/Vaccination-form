const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')
const cors = require('cors')
const {v4} = require('uuid')
const app = express();

app.use(cors());

const patients = [
    {id : "1011", name : 'kattappa', dob: new Date(1900,2,4), gender : "male", place : 'mahishmathi', bloodGroup : "O+", height : 168, weight : 90}
]

const schema = buildSchema(`
    type Query {
        hello : String!
        patients(search : SearchPatientInput) : [Patient!]!
        patient(search : SearchPatientInput) : Patient!    
    }
    type Mutation {
        createPatient(data : CreatePatientInput) : Patient!
    }
    input SearchPatientInput{
        name : String
    }
    input CreatePatientInput {
        name : String!
        dob : String!
        place : String!
        bloodGroup : String
        gender : String!
        height : Int
        weight : Int
    }
    type Patient {
        id : ID!
        name : String!
        dob : String!
        place : String!
        bloodGroup : String
        gender : String!
        height : Int
        weight : Int
    }
`)

const rootValue = {
    hello : () => "world",
    patients : () => patients,
    createPatient: (args) => {
        const { name, dob, place, height, weight, bloodGroup, gender} = args.data;
        const newPatient = {
            id : v4(),
            name,
            dob,
            place,
            bloodGroup, gender, height, weight
        }
        patients.push(newPatient)
        return newPatient;
    },
    patient : args => {
        const { name } = args.search
        return patients.find(patient => patient.name.toLowerCase().includes(name.toLowerCase()))
    }
}

app.use('/gq', graphqlHTTP({
    schema,
    rootValue,
    graphiql : true
}))

app.listen(9090, () => console.log("server started at port : 9090"))