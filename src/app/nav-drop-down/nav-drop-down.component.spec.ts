import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavDropDownComponent } from './nav-drop-down.component';

describe('NavDropDownComponent', () => {
  let component: NavDropDownComponent;
  let fixture: ComponentFixture<NavDropDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavDropDownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
