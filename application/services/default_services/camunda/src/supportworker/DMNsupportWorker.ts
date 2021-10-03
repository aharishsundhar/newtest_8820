import * as path from 'path';
import * as fs from 'fs';
import * as st from 'stringtemplate-js';

export class DmnSupportWorker {

    public dmnSupportWorker(screenname, roles, generationpath, templatepath, callback) {
        let dmnFolder = generationpath;
        if (!fs.existsSync(dmnFolder)) {
            fs.mkdirSync(dmnFolder);
        }
        let pathfile = path.resolve(__dirname, templatepath);
        let generateModel = st.loadGroup(require(pathfile + '/dmnfile_stg'));
        let modelData = generateModel.render("dmnfile", [screenname, roles]);
        console.log('------dmnpathfile-----', [screenname]);
        fs.writeFile(dmnFolder + `/Gep_authorize.dmn`, modelData, function (err) {
            if (err) throw err;
            callback(' DMN file generated');
        })
    }
}