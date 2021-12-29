import winston from "winston"

const { ENVIRONMENT } = process.env

const logger = winston.createLogger({
    level: ENVIRONMENT === 'development' ? 'debug' : 'info',
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.timestamp({
            format: 'MMM-DD-YYYY HH:mm:ss'
        }),
        winston.format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`),
    ),
})

export default logger