const { gql } = require('apollo-server')

module.exports = gql`
    type Cars{
        id: ID!
        brand: String!
        models: String!
        color: String!
        year: Int
        engineCapacity: Int!
        fuel: String!
        transmission: String!
        mileage: Int
        price: Int
    }

    extend type Query{
        getAllCar: [Cars]!
        getById(id: ID!): Cars
    }

    extend type Mutation{
        newCar(brand: String!, models: String!, color: String!, year: Int, engineCapacity: Int!, fuel: String!, transmission: String!, mileage: Int, price: Int): Cars
        updateCar(brand: String!, models: String!, color: String!, year: Int!, engineCapacity: Int!, fuel: String!, transmission: String!, mileage: Int!, price: Int!, id: ID!): Cars
        delCar(id: ID!): String
    }
`
