import { Request, Response } from 'express';
import { Consentservice } from '../service/consentservice';
import { CustomLogger } from '../config/Logger'

let consentservice = new Consentservice;

export class Consentcontroller {
    public consent(req: Request, res: Response) {
        new CustomLogger().showLogger('info', 'Enter into Consentcontrollers.ts: Consentcontroller');

        consentservice.consentservice(req, (response) => {
            res.status(201);
            res.json(response);
            new CustomLogger().showLogger('info', 'Exit from Consentcontrollers.ts: Consentcontroller');
        })
    }
}

