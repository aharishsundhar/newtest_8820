import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

const Schema = mongoose.Schema;

export const Resourceschema = new Schema ({

    _id: {
        type: String,
        default:uuid.v1
    },
    resources: String,
    role: String,
    created_at: {
        type: Date,
        default: Date.now
    }
})