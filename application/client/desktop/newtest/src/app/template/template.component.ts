import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
})

export class TemplateComponent implements OnInit {
    private jwtToken: String;
    constructor (
    ) { }

    ngOnInit() {
    }
}