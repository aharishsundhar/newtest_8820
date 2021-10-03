import { Request, Response } from 'express';
import { Adminservice } from '../service/adminservice';
import { CustomLogger } from '../config/Logger'

let adminservice = new Adminservice();
export class AdminController {


    public adminuser(req: Request, res: Response) {
        new CustomLogger().showLogger('info', 'Enter into admincontroller.ts: adminuser');
        adminservice.admin(req, (response) => {
            res.status(200);
            res.json(response);
            new CustomLogger().showLogger('info', 'Exit from admincontroller.ts: adminuser');
        })
    }

    public getuser(req: Request, res: Response) {
        new CustomLogger().showLogger('info', 'Enter into admincontroller.ts: getuser');

        adminservice.admingetuser(req, (response) => {
            res.status(200);
            res.json(response);
            new CustomLogger().showLogger('info', 'Exit from admincontroller.ts: getuser');

        })
    }

    public getroles(req: Request, res: Response) {
        new CustomLogger().showLogger('info', 'Enter into admincontroller.ts: getroles');

        adminservice.admingetroles(req, (response) => {
            res.status(200);
            res.json(response);
            new CustomLogger().showLogger('info', 'Exit from admincontroller.ts: getroles');

        })
    }

    public updateuser(req: Request, res: Response) {
        new CustomLogger().showLogger('info', 'Enter into admincontroller.ts: updateuser');

        adminservice.adminupdateuser(req, (response) => {
            res.status(200);
            res.json(response);
            new CustomLogger().showLogger('info', 'Exit from admincontroller.ts: updateuser');

        })
    }
}