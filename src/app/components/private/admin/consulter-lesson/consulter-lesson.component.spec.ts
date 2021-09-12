import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterLessonComponent } from './consulter-lesson.component';

describe('ConsulterLessonComponent', () => {
  let component: ConsulterLessonComponent;
  let fixture: ComponentFixture<ConsulterLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterLessonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
