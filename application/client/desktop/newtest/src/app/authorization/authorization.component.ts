import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from './authorization.service';
import { Constants } from '../config/Constant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {

  title = 'Authorization';
  public storedpages = [];
  public camundapage = [];
  angularroutes = [];
  existingpages = [];
  newpages = [];
  pages = [];
  pageTitles = [];
  rolepages = [];
  rolelist: any;

  constructor(private authService: AuthorizationService, private router: Router, private constants: Constants) {
    this.router.config.forEach(pages => {
      if (pages.path !== 'login' && pages.path !== 'signup' && pages.path !== '') {
        this.angularroutes.push(pages.path);
      }
    });

  }

  ngOnInit() {
    this.getQuoteOMaticPages();
    this.getRoles();
  }
  getQuoteOMaticPages() {
    this.authService.GpGetAllScreen().subscribe((screendata) => {
      this.storedpages = screendata;
      screendata.forEach(element => {
        this.camundapage = element.resources;
      });
      this.rolepages = screendata;
      const pagename = this.storedpages.map(page => page.resources);
      this.storedpages = this.storedpages.concat(this.angularroutes.filter(({ angularpage }) => !pagename.includes(angularpage)));
      this.storedpages = this.storedpages.filter(resource => !this.angularroutes.includes(resource.resources));
      console.log('-----pagename----', this.storedpages);
      this.SetRoles();
    }, (error) => {
      console.log('Error ------->>>>>', error);
    });
  }

  SetRoles() {
    const existingpages = this.rolepages.filter(resources => this.storedpages.includes(resources.resources));
    console.log('-----findindex of the existing page----', existingpages);
    existingpages.forEach(element => {
      const savedpage = {
        resources: element.resources,
        role: element.role
      };
      this.existingpages.push(savedpage);
    });
    const newpages = this.storedpages.filter(resources => !this.rolepages.includes(resources.resources));
    console.log('-----findindex of the new page----', newpages);
    newpages.forEach(resource => {
      const guestobject = {
        resources: resource,
        role: 'User'
      };
      this.newpages.push(guestobject);
    });
    const existingpage = new Set(this.existingpages.map(({ resources }) => resources));
    const combined = [
      ...this.existingpages,
      ...this.newpages.filter(({ resources }) => !existingpage.has(resources))
    ];
    console.log('my if not working', combined);
    this.pages = combined;
  }

  save() {
    this.pageTitles.length = 0;
    this.pages.forEach(element => {
      const tempObj = {
        resources: element.resources,
        role: element.role
      };
      this.pageTitles.push(tempObj);
    });
    console.log('FINAL OBJECT====>>>>', this.pageTitles);
    this.authService.SaveScreen(this.pageTitles).subscribe((data) => {
      console.log('Data saved------->>', data);
    }, (error) => {
      console.log('Error in data save ---->>', error);
    });
    this.authService.DmnGenerate(this.pageTitles).subscribe((data) => {
      console.log('DATA=====>>>>>>', data);
    }, (error) => {
      console.log('Error on generating DMN', error);
    });
  }

  getRoles() {
    this.authService.GpGetAllRoles().subscribe((rolelist) => {
      this.rolelist = rolelist;
    }, (error) => {
      console.log('Error --->>>>>', error);
    });
  }
}