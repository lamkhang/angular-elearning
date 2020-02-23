import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCourseProfileComponent } from './my-course-profile.component';

describe('MyCourseProfileComponent', () => {
  let component: MyCourseProfileComponent;
  let fixture: ComponentFixture<MyCourseProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCourseProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCourseProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
