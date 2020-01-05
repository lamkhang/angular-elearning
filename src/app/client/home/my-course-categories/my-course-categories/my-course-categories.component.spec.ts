import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCourseCategoriesComponent } from './my-course-categories.component';

describe('MyCourseCategoriesComponent', () => {
  let component: MyCourseCategoriesComponent;
  let fixture: ComponentFixture<MyCourseCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCourseCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCourseCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
