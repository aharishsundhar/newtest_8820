import { Component, OnInit } from '@angular/core';
import { SefscreenService } from './sefscreen.service';
import grapesjs from 'grapesjs';
import * as  Highcharts from 'highcharts';
import faker from 'faker';


@Component({
  selector: 'app-sefscreen',
  templateUrl: './sefscreen.component.html',
  styleUrls: ['./sefscreen.component.scss'],
})

export class SefscreenComponent implements OnInit {
    public User = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        phonenumber: '',
        Idtoken: '',
        loggedinDate: '',
        loggedoutDate: '',
        role: '',
        org: '',
        org_country: '',
        org_sub1: '',
        org_sub2: '',
        org_sub3: '',
    }

    public url: any = '';
    public firstName = '';
    public lastName = '';
    public Id;
    public changeName;
    public open;
    public close;

    constructor (
        private sefscreenService: SefscreenService,
    ) { }

    ngOnInit() {
        this.User.created_by = sessionStorage.getItem('email'); 
            this.Id = sessionStorage.getItem('Id');
    }
}