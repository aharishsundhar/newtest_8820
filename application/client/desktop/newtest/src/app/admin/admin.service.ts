import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { SharedService } from '../../shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient, private router: Router, private sharedService: SharedService) { }

  Getallusers(): Observable<any> {
    return this.http.get(this.sharedService.DESKTOP_API + '/admin/getusers');
  }
}