import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterTuteursComponent } from './consulter-tuteurs.component';

describe('ConsulterTuteursComponent', () => {
  let component: ConsulterTuteursComponent;
  let fixture: ComponentFixture<ConsulterTuteursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterTuteursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterTuteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
