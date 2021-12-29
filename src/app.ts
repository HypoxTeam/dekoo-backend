import 'dotenv/config'
import {Server, ServerCredentials} from "@grpc/grpc-js"
import logger from "./logging/logger"

const {
    SERVER_HOST, SERVER_PORT, ENVIRONMENT, SSL_ROOT_CERT
} = process.env

const address = `${SERVER_HOST}:${SERVER_PORT}`

const serverCallback = (server: Server, error: Error | null) => {
    if (error == null) {
        server.start();
        logger.info(`Server started as ${address}`)
    } else {
        logger.error(error)
    }
}

function startServer() {
    const server = new Server()

    if (ENVIRONMENT === "PRODUCTION") {
        const rootCert = new Buffer(`${SSL_ROOT_CERT}`, "utf8");

        server.bindAsync(
            address,
            ServerCredentials.createSsl(rootCert, [], true),
            error => serverCallback(server, error)
        )
    } else {
        server.bindAsync(
            address,
            ServerCredentials.createInsecure(),
            error => serverCallback(server, error)
        )
    }
}

startServer()