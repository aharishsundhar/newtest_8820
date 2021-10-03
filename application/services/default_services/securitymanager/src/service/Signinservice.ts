import { Request, response } from 'express';
import { SigninDao } from '../daos/SigninDao';
import { CustomLogger } from '../config/Logger'

let signindao = new SigninDao();
export class Signinservice {

    public signupservice(req: Request, callback) {
        new CustomLogger().showLogger('info', 'Enter into Signinservice.ts: signupservice');
        const users = req.body;
        signindao.signindao(users, (response) => {
            new CustomLogger().showLogger('info', 'Exit from Signinservice.ts: signupservice');
            callback(response);

        });
    }

    public loginservice(req: Request, callback) {
        new CustomLogger().showLogger('info', 'Enter into loginservice');
        const logindetails = req.body;
        signindao.logindao(logindetails, (response) => {
            new CustomLogger().showLogger('info', 'Exit from Signinservice.ts: loginservice');
            callback(response)

        });
    }

    public logoutservice(req: Request, callback) {
        new CustomLogger().showLogger('info', 'Enter into Signinservice.ts: logoutservice');

        const user = req.body.id;
        signindao.logoutdao(user, (response) => {
            new CustomLogger().showLogger('info', 'Exit from Signinservice.ts: logoutservice');
            callback(response);

        })
    }

    public googleservice(req: Request, callback) {
        new CustomLogger().showLogger('info', 'Enter into Signinservice.ts: googleservice');

        const googledata = req.body;
        signindao.googledao(googledata, (response) => {
            new CustomLogger().showLogger('info', 'Exit from Signinservice.ts: googleservice');
            callback(response);

        })
    }

    public getalluserservice(req: Request, callback) {
        new CustomLogger().showLogger('info', 'Enter into Signinservice.ts: getalluserservice');

        signindao.getalluserdao((response) => {
            new CustomLogger().showLogger('info', 'Exit from Signinservice.ts: getalluserservice');
            callback(response);

        })
    }

    public getbyiduserservice(req: Request, callback) {
        new CustomLogger().showLogger('info', 'Enter into Signinservice.ts: getbyiduserservice');

        const userId = req.params.id;
        signindao.getbyiduserdao(userId, (response) => {
            new CustomLogger().showLogger('info', 'Exit from Signinservice.ts: getbyiduserservice');
            callback(response);

        })
    }

    public getrolesservice(req: Request, callback) {

        new CustomLogger().showLogger('info', 'Enter into Signinservice.ts: getrolesservice');

        signindao.getrolesdao((response) => {
            new CustomLogger().showLogger('info', 'Exit from Signinservice.ts: getrolesservice');
            callback(response);

        })
    }


    public saveroleservice(req: Request, callback) {
        new CustomLogger().showLogger('info', 'Enter into Signinservice.ts: saveroleservice');
        let roleDetails = req.body;
        signindao.saveroledao(roleDetails, (response) => {
            new CustomLogger().showLogger('info', 'Exit from Signinservice.ts: saveroleservice');
            callback(response);

        })
    }

    public deleteroleservice(req: Request, callback) {
        new CustomLogger().showLogger('info', 'Enter into Signinservice.ts: deleteroleservice');
        const roleId = req.params.id;
        signindao.deleteroledao(roleId, (response) => {
            new CustomLogger().showLogger('info', 'Exit from Signinservice.ts: deleteroleservice');
            callback(response);

        })
    }

    public updateuserservice(req: Request, callback) {
        new CustomLogger().showLogger('info', 'Enter into Signinservice.ts: updateuserservice');

        const userdetails = req.body;

        signindao.updateuserdao(userdetails, (response) => {
            new CustomLogger().showLogger('info', 'Exit from Signinservice.ts: updateuserservice');
            callback(response);

        })
    }
}