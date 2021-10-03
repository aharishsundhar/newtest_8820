import * as express from 'express';
import { Request, Response } from 'express';
import * as Constant from '../config/Constant';
import { ApiAdaptar }  from '../config/apiAdapter';
import Controller from '../interface/controller.interface';
import { CustomLogger } from '../config/Logger'

export class systemcredentialmanagerController implements Controller {
      public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post('/scm', this.GpCreate);
this.router.get('/scm', this.GpGetAllValues);
this.router.delete('/scm', this.GpDelete);
this.router.put('/scm/update', this.GpUpdate);
this.router.get('/scm/search', this.GpSearch);
this.router.get('/scmbyname', this.GpGetVaultByName);
    }

public GpCreate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into systemcredentialmanagerController.ts: GpCreate');
        new ApiAdaptar().post(Constant.SYSTEMCREDENTIALMANAGERURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from systemcredentialmanagerController.ts: GpCreate');
        }).catch(err => {
            res.send(err);
        });
    }
public GpGetAllValues(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into systemcredentialmanagerController.ts: GpGetAllValues');
        new ApiAdaptar().get(Constant.SYSTEMCREDENTIALMANAGERURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from systemcredentialmanagerController.ts: GpGetAllValues');
        }).catch(err => {
            res.send(err);
        });
    }
public GpDelete(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into systemcredentialmanagerController.ts: GpDelete');
        new ApiAdaptar().delete(Constant.SYSTEMCREDENTIALMANAGERURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from systemcredentialmanagerController.ts: GpDelete');
        }).catch(err => {
            res.send(err);
        });
    }
public GpUpdate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into systemcredentialmanagerController.ts: GpUpdate');
        new ApiAdaptar().put(Constant.SYSTEMCREDENTIALMANAGERURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from systemcredentialmanagerController.ts: GpUpdate');
        }).catch(err => {
            res.send(err);
        });
    }
public GpSearch(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into systemcredentialmanagerController.ts: GpSearch');
        new ApiAdaptar().get(Constant.SYSTEMCREDENTIALMANAGERURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from systemcredentialmanagerController.ts: GpSearch');
        }).catch(err => {
            res.send(err);
        });
    }
public GpGetVaultByName(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into systemcredentialmanagerController.ts: GpGetVaultByName');
        new ApiAdaptar().get(Constant.SYSTEMCREDENTIALMANAGERURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from systemcredentialmanagerController.ts: GpGetVaultByName');
        }).catch(err => {
            res.send(err);
        });
    }




}
