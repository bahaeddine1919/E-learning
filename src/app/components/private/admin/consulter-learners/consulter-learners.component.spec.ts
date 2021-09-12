import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterLearnersComponent } from './consulter-learners.component';

describe('ConsulterLearnersComponent', () => {
  let component: ConsulterLearnersComponent;
  let fixture: ComponentFixture<ConsulterLearnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterLearnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterLearnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
