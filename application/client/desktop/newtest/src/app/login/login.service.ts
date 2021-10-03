import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SharedService } from '../../shared/shared.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private sharedService: SharedService) { }

  signup(user: any): Observable<any> {
    return this.http.post(this.sharedService.DESKTOP_API + '/signup', user);
  }

  googlelogin(user: any): Observable<any> {
    return this.http.post(this.sharedService.DESKTOP_API + '/googlesignin', user);
  }
  Login(user: any): Observable<any> {
    return this.http.post(this.sharedService.DESKTOP_API + '/login', user);
  }

  Logout(user: any): Observable<any> {
    return this.http.put(this.sharedService.DESKTOP_API + '/logout', user);
  }

  Consent(consent: any): Observable<any> {
    return this.http.put(this.sharedService.DESKTOP_API + '/consent', consent);
  }

}
