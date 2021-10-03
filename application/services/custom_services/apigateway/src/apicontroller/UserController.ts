import * as express from 'express';
import { Request, Response } from 'express';
import * as Constant from '../config/Constant';
import { ApiAdaptar }  from '../config/apiAdapter';
import Controller from '../interface/controller.interface';
import { CustomLogger } from '../config/Logger'

export class UserController implements Controller {
      public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/systemEntryFeature/userdata/:id', this.GpSEF);
    }

public GpSEF(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into UserController.ts: GpSEF');
        new ApiAdaptar().get(Constant.SYSTEMENTRYURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from UserController.ts: GpSEF');
        }).catch(err => {
            res.send(err);
        });
    }




}
