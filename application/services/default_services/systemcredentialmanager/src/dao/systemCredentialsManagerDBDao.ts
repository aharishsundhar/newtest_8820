import systemCredentialsManagerModel from '../models/systemCredentialsManager';
import { CustomLogger } from '../config/Logger'


export class systemCredentialsManagerDBDao {
    private systemCredentialsManager = systemCredentialsManagerModel;
    constructor() { }
public GpSearch(systemCredentialsManagerData, callback){
new CustomLogger().showLogger('info', 'Enter into systemCredentialsManagerDBDao.ts: GpSearch')
let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;Object.entries(systemCredentialsManagerData).forEach(
                        ([key,value]) => {
                            if(value !== ''){
                                andkey = key;
                                and_obj[andkey] = value;
                            }
                            else{
                                orkey = key;
                                or_obj[orkey] = { $ne: '' }
                            }
                        }
                    );;
;
this.systemCredentialsManager.find({$and: [
                        {
                            $or: [
                               or_obj
                            ]
                        },
                        and_obj
                    ]}).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from systemCredentialsManagerDBDao.ts: GpSearch');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpUpdate(systemCredentialsManagerData, callback){
new CustomLogger().showLogger('info', 'Enter into systemCredentialsManagerDBDao.ts: GpUpdate')

this.systemCredentialsManager.findOneAndUpdate({ _id: systemCredentialsManagerData._id }, systemCredentialsManagerData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from systemCredentialsManagerDBDao.ts: GpUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into systemCredentialsManagerDBDao.ts: GpGetAllValues')

this.systemCredentialsManager.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from systemCredentialsManagerDBDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpDelete( systemCredentialsManagerId, callback){
new CustomLogger().showLogger('info', 'Enter into systemCredentialsManagerDBDao.ts: GpDelete')

this.systemCredentialsManager.findByIdAndRemove(systemCredentialsManagerId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from systemCredentialsManagerDBDao.ts: GpDelete');
callback(result);
}).catch((error)=>{
callback(error);
});}




public GpCreate(systemCredentialsManagerData, callback){
new CustomLogger().showLogger('info', 'Enter into systemCredentialsManagerDBDao.ts: GpCreate')
let temp = new systemCredentialsManagerModel(systemCredentialsManagerData);
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from systemCredentialsManagerDBDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}