const winston = require('winston');

// Configura el logger
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message }) => {
            return `${timestamp} - ${level}: ${message}`;
        })
    ),
    transports: [
        new winston.transports.File({ filename: 'app.log' })
    ]
});

// Escribe algunos mensajes en el log
logger.info('Este es un mensaje informativo');
logger.warn('Este es un mensaje de advertencia');
logger.error('Este es un mensaje de error');
