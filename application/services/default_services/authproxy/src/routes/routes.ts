import { Request, Response } from 'express';
import { Proxycontroller } from '../controllers/ProxyController';

export class Routes {

    public proxycontroller: Proxycontroller = new Proxycontroller();

    public routes(app): void {

        app.route('/proxy').post(this.proxycontroller.usercontroller);
        
    }
}