import mongoose = require('mongoose');
import { Resourceschema } from '../model/resource';
import * as asyncLoop from 'node-async-loop';

const screenschema = mongoose.model('resources', Resourceschema);

export class Camundadao {

    public postscreens(screensbody, callback) {
        let screenresponse;
        asyncLoop(screensbody, (screen, next) => {
            // screenaccess = new screenschema(screen);
            console.log(screen);
            screenschema.update( {resources:screen.resources},{$set:{resources:screen.resources,role:screen.role}} ,{ upsert: true }).then((result) => {
                screenresponse = result;
            })
            next();
        }, (err) => {
            if (err) {
                callback(err);
            } else {
                callback(screenresponse);
            }
        });
    }

    public getallscreen(callback) {
        screenschema.find().then((getscreen) => {
            callback(getscreen);
        }).catch(error => {
            callback(error);
        })
    }
}