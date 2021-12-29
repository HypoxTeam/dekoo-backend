import 'dotenv/config'
import { Server, ServerCredentials } from "@grpc/grpc-js"
import logger from "./logging/logger.js"

const {
    SERVER_HOST, SERVER_PORT, ENVIRONMENT, SSL_ROOT_CERT
} = process.env

const address = `${SERVER_HOST}:${SERVER_PORT}`

const serverCallback = (error: Error | null) => {
    if (error != null) {
        throw error
    }
}

async function startServer() {
    const app = new Server()

    if (ENVIRONMENT === "PRODUCTION") {
        const rootCert = new Buffer(`${SSL_ROOT_CERT}`);

        app.bindAsync(
            address,
            ServerCredentials.createSsl(rootCert, [], true),
            serverCallback
        )
    } else {
        app.bindAsync(
            address,
            ServerCredentials.createInsecure(),
            serverCallback
        )
    }
}

startServer()
    .then(() => {
        logger.info(`Server started as ${address}`)
    })
    .catch(err => {
        logger.error(err)
    })