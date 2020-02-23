import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseAccountProfileComponent } from './close-account-profile.component';

describe('CloseAccountProfileComponent', () => {
  let component: CloseAccountProfileComponent;
  let fixture: ComponentFixture<CloseAccountProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloseAccountProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseAccountProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
