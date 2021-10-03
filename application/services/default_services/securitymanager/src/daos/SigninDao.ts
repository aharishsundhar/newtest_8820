import mongoose = require('mongoose');
import { UserSchema } from '../models/User';
import { Roleschema } from '../models/Role';
import * as jwt from 'jsonwebtoken';
import * as asyncLoop from 'node-async-loop';
var jwtDecode = require('jwt-decode');
import { CustomLogger } from '../config/Logger'

const signinmodel = mongoose.model('User', UserSchema);
const rolemodel = mongoose.model('role', Roleschema);
export class SigninDao {

    private userrole: any;
    private rolevalue: any;
    private signuprole: any;
    private userDetails: any;
    private mailboolean: boolean;
    public signindao(userData, callback) {
        new CustomLogger().showLogger('info', 'Enter into SigninDao.ts: signindao');
        rolemodel.find().then(result => {
            asyncLoop(result, (roles, next) => {
                if (roles.role === 'User') {
                    this.signuprole = roles._id;
                }
                next();
            }, (err) => {
                if (err) {
                    return err;
                }
            })

            this.userDetails = {
                'firstname': userData.firstname,
                'lastname': userData.lastname,
                'password': userData.password,
                'email': userData.email,
                'username': userData.email,
                'role': this.signuprole,
                'Idtoken': '',
                'installrToken': userData.installrToken
            };
            signinmodel.find().then(data => {
                if (data.length !== 0) {
                    asyncLoop(data, (users, next) => {
                        if (users.email === this.userDetails.email) {
                            this.mailboolean = true;
                        } else {
                            this.mailboolean = false;
                        }
                        next();
                    }, (error) => {
                        if (error) {
                            return error;
                        }
                    });
                    if (this.mailboolean === true) {
                        var mailresponse = 'Email is already exists';
                        new CustomLogger().showLogger('info', 'Exit from SigninDao.ts: signindao');
                        callback(mailresponse);
                    } else {
                        let logincreds = new signinmodel(this.userDetails);
                        logincreds.save().then((result) => {
                            new CustomLogger().showLogger('info', 'Exit from SigninDao.ts: signindao');
                            callback(result);
                        }).catch((error) => {
                            callback(error);
                        })
                    }
                } else {
                    let logincreds = new signinmodel(this.userDetails);
                    logincreds.save().then((result) => {
                        new CustomLogger().showLogger('info', 'Exit from SigninDao.ts: signindao');
                        callback(result);

                    }).catch((error) => {
                        callback(error);
                    })
                }
            });

        })

    }

    public logindao(logindetails, callback) {
        new CustomLogger().showLogger('info', 'Enter into SigninDao.ts: logindao');
        signinmodel.findOneAndUpdate({ email: logindetails.email, password: logindetails.password }, { $set: { loggedinDate: new Date() } }, function (err, response) {
            if (err) {
                callback(err);
            }
            if (response === null) {
                response = 'Incorrect Username or Password';
                new CustomLogger().showLogger('info', 'Exit from SigninDao.ts: logindao');
                callback(response);

            } else {
                new CustomLogger().showLogger('info', 'Exit from SigninDao.ts: logindao');
                callback(response);

            }
        })
    }

    public logoutdao(userid, callback) {
        new CustomLogger().showLogger('info', 'Enter into SigninDao.ts: logoutdao');

        signinmodel.findByIdAndUpdate(userid, { $set: { loggedoutDate: new Date() } }, function (err, result) {
            if (err) {
                callback(err);
            }
            new CustomLogger().showLogger('info', 'Exit from SigninDao.ts: logoutdao');
            callback(result);

        })
    }

    public googledao(googledata, callback) {
        new CustomLogger().showLogger('info', 'Enter into SigninDao.ts: googledao');

        rolemodel.find().then((result) => {
            asyncLoop(result, (roles, next) => {
                if (roles.role === 'Standarduser') {
                    this.userrole = roles._id;
                    this.rolevalue = roles.role;
                }
                next();
            }, (err) => {
                if (err) {
                    return err;
                }
            })
            // @ts-ignore
            let token = jwtDecode(googledata.idtoken);
            const userobject = {
                'firstname': token.given_name,
                'lastname': token.family_name,
                'username': token.email,
                'email': token.email,
                'role': this.userrole,
                'signintype': 'google'
            };
            let googlelogin = new signinmodel(userobject);
            googlelogin.save().then((result) => {
                var payload = {
                    username: result.username,
                    firstname: result.firstname,
                    lastname: result.lastname,
                    email: result.email,
                    id: result._id,
                    role: this.rolevalue
                }
                var idtoken = jwt.sign(payload, 'geppettosecret', {
                    expiresIn: 86400
                });
                signinmodel.findByIdAndUpdate(result._id, { $set: { Idtoken: idtoken } }, function (err, response) {
                    if (err) {
                        callback(err);
                    }
                    response.Idtoken = idtoken;
                    new CustomLogger().showLogger('info', 'Exit from SigninDao.ts: googledao');
                    callback(response);

                });
            });

        });

    }

    public getalluserdao(callback) {
        new CustomLogger().showLogger('info', 'Enter into SigninDao.ts: getalluserdao');

        signinmodel.find().populate({
            path: 'role', model: rolemodel
        }).then(result => {
            new CustomLogger().showLogger('info', 'Exit from SigninDao.ts: getalluserdao');
            callback(result);

        }).catch((error => {
            callback(error);
        }))
    }

    public getbyiduserdao(userId, callback) {
        new CustomLogger().showLogger('info', 'Enter into SigninDao.ts: getbyiduserdao');

        signinmodel.findById(userId).populate({
            path: 'role', model: rolemodel
        }).then(result => {
            new CustomLogger().showLogger('info', 'Exit from SigninDao.ts: getbyiduserdao');
            callback(result);

        }).catch((error => {
            callback(error);
        }))
    }

    public getrolesdao(callback) {
        new CustomLogger().showLogger('info', 'Enter into SigninDao.ts: getrolesdao');

        rolemodel.find().then(result => {
            new CustomLogger().showLogger('info', 'Exit from SigninDao.ts: getrolesdao');
            callback(result);

        }).catch((error) => {
            callback(error);
        })
    }

    public saveroledao(roleData, callback) {
        new CustomLogger().showLogger('info', 'Enter into SigninDao.ts: saveroledao');

        let temp = new rolemodel(roleData);
        temp.save().then((result) => {
            new CustomLogger().showLogger('info', 'Exit from ticketDao.ts: saveroledao');
            callback(result);
        }).catch((error) => {
            callback(error);
        });
    }

    public deleteroledao(roleId, callback) {
        new CustomLogger().showLogger('info', 'Enter into SigninDao.ts: deleteroledao');

        rolemodel.findByIdAndRemove(roleId).then((result) => {
            new CustomLogger().showLogger('info', 'Exit from SigninDao.ts: deleteroledao');
            callback(result);
        }).catch((error) => {
            callback(error);
        });
    }

    public updateuserdao(updateuser, callback) {
        new CustomLogger().showLogger('info', 'Enter into SigninDao.ts: updateuserdao');


        var payload = {
            username: updateuser.email,
            firstname: updateuser.firstname,
            lastname: updateuser.lastname,
            email: updateuser.email,
            id: updateuser.id,
            role: updateuser.role.role,
            installrToken: updateuser.installrToken
        }
        var idtoken = jwt.sign(payload, 'geppettosecret', {
            expiresIn: 86400
        });

        signinmodel.findByIdAndUpdate(updateuser.id, { $set: { username: updateuser.username, firstname: updateuser.firstname, lastname: updateuser.lastname, email: updateuser.email, role: updateuser.role._id, Idtoken: idtoken, installrToken: updateuser.installrToken } }, (err, response) => {
            if (err) {
                callback(err);
            }
            var updaterespone = {
                username: updateuser.email,
                firstname: updateuser.firstname,
                lastname: updateuser.lastname,
                email: updateuser.email,
                id: updateuser.id,
                role: updateuser.role._id,
                Idtoken: idtoken,
                installrToken: updateuser.installrToken
            }
            new CustomLogger().showLogger('info', 'Exit from SigninDao.ts: updateuserdao');
            callback(updaterespone);

        })
    }
}