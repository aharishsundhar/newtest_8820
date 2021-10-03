import { createLogger, format, transports } from 'winston';
import * as DailyRotateFile from "winston-daily-rotate-file";
import * as  fs from 'fs';


export class CustomLogger {

  public logger = createLogger({
    level: 'info',
    format: format.combine(
      format.label({ label: 'gep-dev-camunda-api' }),
      format.colorize(),
      format.json(),
      format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss'
      }),
      format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
    ),
    transports: [
      new transports.Console({level: 'debug'}),
      new DailyRotateFile({
        filename: `log/flow-%DATE%.log`,
        datePattern: 'YYYY-MM-DD'
      })
    ]
  });

  showLogger(level, log) {
    const logDir = 'log';
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir);
    }
    if (level === 'info') {
      return this.logger.info(log);
    } else if (level === 'error') {
      return this.logger.error(log);
    } else if (level === 'warn') {
      return this.logger.warn(log);
    } else if (level === 'silly') {
      return this.logger.silly(log);
    } else if (level === 'debug') {
      return this.logger.debug(log);
    }
  }
}