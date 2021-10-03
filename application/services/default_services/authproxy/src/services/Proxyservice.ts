import { Request, Response, NextFunction } from 'express';
import { Proxydao } from '../dao/Proxydao';
import { CustomLogger } from '../config/Logger'

let proxydao = new Proxydao;

export class Proxyservice {

    public userservice(userdetails, callback) {
        new CustomLogger().showLogger('info', 'Enter into Proxyservice.ts: userservice');
        proxydao.userdao(userdetails, (response) => {
            new CustomLogger().showLogger('info', 'Exit from Proxyservice.ts: userservice');
            callback(response);
        })
    }
}
