import mongoose = require('mongoose');
import { Resourceschema } from './model/resource';
import { resourcetypes } from './assets/screen';

const resourcemodel = mongoose.model('Resource', Resourceschema);

export class SeedService {

    constructor() { }

    public create(): void {
        resourcetypes.map(something =>{
            resourcemodel.findOneAndUpdate({resources: something['resources']},
            something, {new: true}, (err, data)=>{
                if (data === null){
                    let screenroute = new resourcemodel(something);
                    screenroute.save();
                }
            })
        })
    }
}
