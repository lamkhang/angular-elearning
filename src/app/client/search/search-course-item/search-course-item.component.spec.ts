import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCourseItemComponent } from './search-course-item.component';

describe('SearchCourseItemComponent', () => {
  let component: SearchCourseItemComponent;
  let fixture: ComponentFixture<SearchCourseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCourseItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCourseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
