const { ApolloServer} = require('apollo-server')
const modules = require('./modules')
const PORT = process.env.PORT || 3000

const server = new ApolloServer({
    modules
   
})


server.listen(PORT, console.log(PORT))