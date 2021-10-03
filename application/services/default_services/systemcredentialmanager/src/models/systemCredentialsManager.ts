
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;




export const systemCredentialsManagerSchema = new Schema({
   type: {type:String },
   credentials:{},
   userId: {type: String},
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   
})

const systemCredentialsManagerModel = mongoose.model('systemCredentialsManager', systemCredentialsManagerSchema, 'systemCredentialsManager');
export default systemCredentialsManagerModel;
