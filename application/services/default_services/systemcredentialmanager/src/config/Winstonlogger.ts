import * as fs from 'fs';
import * as expressWinston from 'express-winston';

const winston = require('winston');
require('winston-daily-rotate-file');

const logDir = 'log';

export class WinstonLogger {

    public setupLogger(): void {
        if (!fs.existsSync(logDir)) {
            fs.mkdirSync(logDir);
        }
        expressWinston.requestWhitelist.push('body');
        expressWinston.responseWhitelist.push('body');
    }

    public configureWinston(app): void {
        app.use(expressWinston.logger({
            format: winston.format.combine(
                winston.format.label({ label: 'gep-dev-node-api' }),
                winston.format.colorize(),
                winston.format.json()
            ),
            transports: [
                new winston.transports.Console(),
                new (winston.transports.DailyRotateFile)({
                    level: 'info',
                    dirname: logDir,
                    filename: logDir + 'api-%DATE%.log',
                    datePattern: 'YYYY-MM-DD',
                    zippedArchive: false,
                    prepend: true,
                    json: true,
                    colorize: false,
                }),
            ],
            statusLevels: false,
            level: function (req, res) {
                var level = '';
                if (res.statusCode >= 100) {
                    level = 'info';
                }
                if (res.statusCode >= 400) {
                    level = 'warn';
                }
                if (res.statusCode >= 500) {
                    level = 'error';
                }
                return level;
            },
            exitOnError: false
        }))
        app.use(expressWinston.errorLogger({
            format: winston.format.combine(
                winston.format.label({ label: 'gep-dev-node-api' }),
                winston.format.colorize(),
                winston.format.json()
            ),

            transports: [
                new winston.transports.Console(),
                new (winston.transports.DailyRotateFile)({
                    level: 'info',
                    dirname: logDir,
                    filename: logDir + '/error/api-%DATE%.log',
                    datePattern: 'YYYY-MM-DD',
                    zippedArchive: false,
                    prepend: true,
                    json: true,
                    colorize: false,
                }),
            ],
            statusLevels: false, // default value
            level: function (req, res) {
                var level = '';
                if (res.statusCode >= 100) {
                    level = 'info';
                }
                if (res.statusCode >= 400) {
                    level = 'warn';
                }
                if (res.statusCode >= 500) {
                    level = 'error';
                }
                return level;
            },
            exitOnError: false,
        }));
    }
}
