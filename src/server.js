const { ApolloServer} = require('apollo-server')
const PORT = process.env.PORT || 3000

const modules = require('./modules')
const server = new ApolloServer({
    modules
   
})


server.listen(PORT, console.log(PORT))