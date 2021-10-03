import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SharedService } from '../../shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private http: HttpClient,
    private sharedService: SharedService) { }

  GpGetAllRoles(): Observable<any> {
    return this.http.get(this.sharedService.DESKTOP_API + '/getallroles');
  }

  GpGetAllScreen(): Observable<any> {
    return this.http.get(this.sharedService.DESKTOP_API + '/getallscreens');
  }

  DmnGenerate(payload): Observable<any> {
    return this.http.post(this.sharedService.DESKTOP_API + '/dmngenerate', payload);
  }

  SaveScreen(payload): Observable<any> {
    return this.http.post(this.sharedService.DESKTOP_API + '/savescreen', payload);
  }

}
