import mongoose = require('mongoose');
import * as jwt from 'jsonwebtoken';
import * as fetch from 'node-fetch';
import { Signinschema } from '../model/Signin';
import * as Constants from '../config/constants';
import { CustomLogger } from '../config/Logger'

const signinmodel = mongoose.model('Signin', Signinschema);

export class Proxydao {

    public userdao(userdetails, callback) {
        new CustomLogger().showLogger('info', 'Enter into Proxydao.ts: userdao');

        var role = userdetails.role;
        var jsonbody = {
            "variables": {
                "role": {
                    "value": role,
                    "type": "String"
                }
            }
        }
        var posturl = `${Constants.camundaUrl}/accesslevel`

        var camundaresponse = [];
        fetch(posturl, { method: 'POST', body: JSON.stringify(jsonbody) })
            .then(res => res.json())
            .then((response) => {
                camundaresponse.push(response);
                new CustomLogger().showLogger('info', 'Exit from Proxydao.ts: userdao');
                callback(camundaresponse);
            }).catch(error => {
                callback(error);
            })
    }
}