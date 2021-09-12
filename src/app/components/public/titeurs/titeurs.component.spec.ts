import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiteursComponent } from './titeurs.component';

describe('TiteursComponent', () => {
  let component: TiteursComponent;
  let fixture: ComponentFixture<TiteursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiteursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
