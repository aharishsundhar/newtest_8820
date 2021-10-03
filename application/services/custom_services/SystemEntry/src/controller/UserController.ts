import { Request, Response } from 'express';
import { UserService } from '../service/UserService';
import { CustomLogger } from '../config/Logger'
let User = new UserService();

export class UserController {
    
    constructor() { }
    
    public GpSEF(req: Request, res: Response) {
User.GpSEF(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into UserController.ts: GpSEF');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from UserController.ts: GpSEF');
    })}


}