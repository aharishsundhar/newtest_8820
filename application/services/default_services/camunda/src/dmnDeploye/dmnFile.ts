import * as asyncLoop from 'node-async-loop';
import * as mongoose from 'mongoose';
import * as FormData from 'form-data';
import * as fs from 'fs';
import * as fetch from 'node-fetch';
import * as path from 'path'
import { camundaService } from '../config/camundaService';


export class DmnFile {

    public async dmnFileDeploye() {
        // const DmnPath = '/home/decoders/Videos/generated-geppetto/DanTest701/application/services/camunda/Gepauthorize.dmn';
        const DmnPath = path.resolve(__dirname, '../../Gep_authorize.dmn');
        const formData = new FormData();
        const postUrl = `${camundaService.camundaUrl}/engine-rest/deployment/create`;
        formData.append("data", fs.createReadStream(DmnPath));
        formData.append("deployment-name", "Gepauthorize");
        formData.append("enable-duplicate-filtering", "true");
        formData.append("deploy-changed-only", "true");
        const options = {
            method: 'POST',
            headers: formData.getHeaders(),
            body: formData
        }
        fetch(postUrl, options).then((response) => {
            response.json().then(data => {
                console.log('data_--------------->', data);
            })
        }).catch(error => {
            console.log('error-----------', error);
        })

    }

}
