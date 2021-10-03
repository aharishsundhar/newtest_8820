import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SharedService } from '../../shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class ManageRolesService {

  constructor(private http: HttpClient,
    private sharedService: SharedService) { }

  GpGetAllRoles(): Observable<any> {
    return this.http.get(this.sharedService.DESKTOP_API + '/getallroles');
  }

  GpSaveRoles(payload): Observable<any> {
    return this.http.post(this.sharedService.DESKTOP_API + '/saveroles', payload);
  }

  GpDeleteRoles(id): Observable<any> {
    return this.http.delete(this.sharedService.DESKTOP_API + '/deleteroles/' + id);
  }
}