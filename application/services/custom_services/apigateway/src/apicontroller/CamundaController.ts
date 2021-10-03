import * as express from 'express';
import { Request, Response } from 'express';
import * as Constant from '../config/Constant';
import { ApiAdaptar }  from '../config/apiAdapter';
import Controller from '../interface/controller.interface';
import { CustomLogger } from '../config/Logger'

export class CamundaController implements Controller {
      public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post('/accesslevel', this.camunda);
this.router.post('/savescreen', this.savescreen);
this.router.post('/dmngenerate', this.dmngenerate);
this.router.get('/getallscreens', this.getallscreens);
    }

public camunda(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into CamundaController.ts: camunda');
        new ApiAdaptar().post(Constant.CAMUNDAURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from CamundaController.ts: camunda');
        }).catch(err => {
            res.send(err);
        });
    }
public savescreen(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into CamundaController.ts: savescreen');
        new ApiAdaptar().post(Constant.CAMUNDAURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from CamundaController.ts: savescreen');
        }).catch(err => {
            res.send(err);
        });
    }
public dmngenerate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into CamundaController.ts: dmngenerate');
        new ApiAdaptar().post(Constant.CAMUNDAURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from CamundaController.ts: dmngenerate');
        }).catch(err => {
            res.send(err);
        });
    }
public getallscreens(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into CamundaController.ts: getallscreens');
        new ApiAdaptar().get(Constant.CAMUNDAURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from CamundaController.ts: getallscreens');
        }).catch(err => {
            res.send(err);
        });
    }




}
