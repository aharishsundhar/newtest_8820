import * as mongoose from 'mongoose';
import UserModel from '../models/User';
import { CustomLogger } from '../config/Logger'
import { SystemEntryService } from '../config/SystemEntryService';
import fetch from 'node-fetch';
const faker = require('faker');


export class UserDao {
    
    private User = UserModel;
    constructor() { }
    
    public GpSEF(UserFeatureId, callback){
    
        new CustomLogger().showLogger('info', 'Enter into UserDao.ts: GpSEF')
    
        
    
        fetch(`${SystemEntryService.apiGatewayURL}/desktop/getuser/${UserFeatureId}`).then(res => res.json().then(data	=>	({ data 
    }))).then(obj=> callback(obj.data));}

    
    }