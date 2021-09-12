import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoisirLessonComponent } from './choisir-lesson.component';

describe('ChoisirLessonComponent', () => {
  let component: ChoisirLessonComponent;
  let fixture: ComponentFixture<ChoisirLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoisirLessonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoisirLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
