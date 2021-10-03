import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable()
export class SharedService {

     public DESKTOP_API = environment.DESKTOP_API;
    public MOBILE_API = environment.MOBILE_API;
}
  