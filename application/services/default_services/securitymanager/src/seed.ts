import mongoose = require('mongoose');
import { Roleschema } from './models/Role';
import { roletypes } from './assets/role';

const roletypemodel = mongoose.model('Role', Roleschema);

export class SeedService {

    constructor() { }

    public create(): void {
        roletypes.map(roles => {
            roletypemodel.findOneAndUpdate({ role: roles['role'] },
                roles, { new: true }, (err, data) => {
                    if (data === null) {
                        let roletype = new roletypemodel(roles);
                        roletype.save();
                    }
                });
        });
    }
}