import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaultAdminComponent } from './vault-admin.component';

describe('VaultAdminComponent', () => {
  let component: VaultAdminComponent;
  let fixture: ComponentFixture<VaultAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaultAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaultAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
