import 'module-alias/register'
import 'reflect-metadata'
import 'source-map-support/register'
import { prepareApolloServer } from './ApolloServer'

async function main(): Promise<void> {
    const apolloServer = await prepareApolloServer()

    const apolloData = await apolloServer.listen(
        process.env.PORT ?? 3030
    )

    console.log(`Apollo Server on "${apolloData.url}"`)
}

main().catch(console.error)
