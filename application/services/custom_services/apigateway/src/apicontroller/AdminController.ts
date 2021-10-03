import * as express from 'express';
import { Request, Response } from 'express';
import * as Constant from '../config/Constant';
import { ApiAdaptar }  from '../config/apiAdapter';
import Controller from '../interface/controller.interface';
import { CustomLogger } from '../config/Logger'

export class AdminController implements Controller {
      public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/admin/getusers', this.getAllUser);
this.router.get('/admin/getuser/:id', this.getUserById);
this.router.get('/admin/getallroles', this.getAllRoles);
this.router.put('/admin/updateuser', this.updateUser);
    }

public getAllUser(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into AdminController.ts: getAllUser');
        new ApiAdaptar().get(Constant.ADMINURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from AdminController.ts: getAllUser');
        }).catch(err => {
            res.send(err);
        });
    }
public getUserById(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into AdminController.ts: getUserById');
        new ApiAdaptar().get(Constant.ADMINURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from AdminController.ts: getUserById');
        }).catch(err => {
            res.send(err);
        });
    }
public getAllRoles(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into AdminController.ts: getAllRoles');
        new ApiAdaptar().get(Constant.ADMINURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from AdminController.ts: getAllRoles');
        }).catch(err => {
            res.send(err);
        });
    }
public updateUser(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into AdminController.ts: updateUser');
        new ApiAdaptar().put(Constant.ADMINURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from AdminController.ts: updateUser');
        }).catch(err => {
            res.send(err);
        });
    }




}
