import { ApolloServer } from 'apollo-server'
import { PingResolver } from './resolvers/PingResolver'
import { buildSchema } from 'type-graphql'

export async function prepareApolloServer(): Promise<ApolloServer> {
    const apolloServer = new ApolloServer({
        subscriptions: {
            path: '/graphql'
        },
        schema: await buildSchema({
            resolvers: [PingResolver]
        })
    })

    return apolloServer
}
