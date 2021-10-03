import { Request } from 'express';
import { ConsentDao } from '../daos/ConsentDao';
import { CustomLogger } from '../config/Logger'

let consentdao = new ConsentDao();

export class Consentservice {
    public consentservice(req: Request, callback) {
        new CustomLogger().showLogger('info', 'Enter into consentservice.ts: consentservice');
        const consentbody = req.body;
        consentdao.consentdao(consentbody, (response) => {
            new CustomLogger().showLogger('info', 'Exit from consentservice.ts: Consentcontroller');
            callback(response);
        });

    }

}
