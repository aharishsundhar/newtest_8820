import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SefscreenComponent } from './sefscreen.component';

describe('SefscreenComponent', () => {
  let component: SefscreenComponent;
  let fixture: ComponentFixture<SefscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SefscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SefscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});