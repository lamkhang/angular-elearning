import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCategoriesItemComponent } from './course-categories-item.component';

describe('CourseCategoriesItemComponent', () => {
  let component: CourseCategoriesItemComponent;
  let fixture: ComponentFixture<CourseCategoriesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseCategoriesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCategoriesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
