import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyStudentItemComponent } from './my-student-item.component';

describe('MyStudentItemComponent', () => {
  let component: MyStudentItemComponent;
  let fixture: ComponentFixture<MyStudentItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyStudentItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyStudentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
