import * as cors from 'cors'
import * as express from 'express'
import { graphqlHTTP } from 'express-graphql'
import 'module-alias/register'
import config from './config'
import { connectDb } from './db'
import schema from './graphql/schema'

const app = express()
const expressPlayground = require('graphql-playground-middleware-express')
    .default

connectDb()

app.use(cors())

app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        graphiql: true,
    }),
)

app.get('/playground', expressPlayground({ endpoint: '/graphql' }))

app.listen(config.serverPort, () => {
    console.log(`now listening for requests on port ${config.serverPort}`)
})

export default app
