import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the LoginServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginServiceProvider {

  constructor(public http: HttpClient) {

    console.log('Hello LoginServiceProvider Provider');
  }

  public login(user:any): Observable<any> {
    return this.http.post('http://localhost:3021/login', user)

  }

}
