import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin/admin.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ButtonRendererComponent } from './button-renderer/button-renderer.component';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private route: Router, private router: ActivatedRoute, private adminservice: AdminService) {
    this.frameworkComponents = {
      buttonRenderer: ButtonRendererComponent,
    };

  }

  public rowData;
  public columnDefs;
  public gridApi;
  public gridColumnApi;
  public Userdetails;

  defaultColDef: { editable: boolean; sortable: boolean; filter: boolean; };
  frameworkComponents: { buttonRenderer: any; };

  ngOnInit() {

    this.agGridInitialization();
  }

  Users() {
    this.adminservice.Getallusers().subscribe(data => {
      this.rowData = data.body.body;
      this.Userdetails = data.body.body;
    }, error => {
      console.error('error:', error);
    });
  }

  agGridInitialization() {

    this.columnDefs = [
      {
        headerName: 'Firstname',
        field: 'firstname',
        width: 250,
      },
      {
        headerName: 'Lastname',
        field: 'lastname',
        width: 250,
      },
      {
        headerName: 'Username',
        field: 'username',
        width: 250,
      },
      {
        headerName: 'Email',
        field: 'email',
        width: 250
      },
      {
        headerName: 'InstallrToken',
        field: 'installrToken',
        width: 250
      },
      {
        headerName: 'Role',
        field: 'role.role',
        width: 250
      },
      {
        headerName: 'Action',
        width: 100,
        cellRenderer: 'buttonRenderer',
        editable: false,
        sortable: false,
        filter: false,
        cellRendererParams: {
          onClick: this.Editaction.bind(this),
          label: 'Edit'
        }
      }
    ];
    this.Users();
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
    this.gridColumnApi = params.columnApi;
  }

  Editaction(e) {
    const rows = e.rowData;
    // console.log('selectedrow------->>>', rows);
    this.route.navigate(['profile'], { queryParams: { id: rows._id } });
  }
}
