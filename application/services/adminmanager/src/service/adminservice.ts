import { Request } from 'express';

import { Loginmanagerservice } from '../apiservices/index';
import { CustomLogger } from '../config/Logger'

export class Adminservice {

    private loginservice = new Loginmanagerservice();

    public admin(req:Request, callback: CallableFunction){
        new CustomLogger().showLogger('info', 'Enter into adminservice.ts: admin');

        this.loginservice.getallUser((response) => {
            new CustomLogger().showLogger('info', 'Exit from admin');
            callback(response.body);

        })
    }

    public admingetuser(req:Request, callback:CallableFunction){
        new CustomLogger().showLogger('info', 'Enter into adminservice.ts: admingetuser');

        const id = req.params.id
        this.loginservice.getuserbyid(id,(response)=>{
            new CustomLogger().showLogger('info', 'Exit from adminservice.ts: admingetuser');
            callback(response.body);

        })
    }

    public admingetroles(req:Request,callback:CallableFunction){
        new CustomLogger().showLogger('info', 'Enter into adminservice.ts: admingetroles');

        this.loginservice.getallroles((response)=>{
            new CustomLogger().showLogger('info', 'Exit from adminservice.ts: admingetroles');
            callback(response.body);

        })
    }

    public adminupdateuser(req:Request, callback:CallableFunction){
        new CustomLogger().showLogger('info', 'Enter into adminservice.ts: adminupdateuser');

        const userdetails = req.body;

        this.loginservice.Updateuser(userdetails,(response)=>{
            new CustomLogger().showLogger('info', 'Exit from adminservice.ts: adminupdateuser');
            callback(response.body);

        })
    }
}