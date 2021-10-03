import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Constants {

    public pageTitles: string = 'http://' + window.location.hostname + ':8002/dmngenerate';

    public savescreen: string = 'http://' + window.location.hostname + ':8002/savescreen';

    public getallscreen: string = 'http://' + window.location.hostname + ':8002/getallscreens';

    public getallroles: string = 'http://' + window.location.hostname + ':8003/getallroles';

    public saverole: string = 'http://' + window.location.hostname + ':8003/saveroles';

    public deleterole: string = 'http://' + window.location.hostname + ':8003/deleteroles';


}