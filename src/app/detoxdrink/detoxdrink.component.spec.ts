import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetoxdrinkComponent } from './detoxdrink.component';

describe('DetoxdrinkComponent', () => {
  let component: DetoxdrinkComponent;
  let fixture: ComponentFixture<DetoxdrinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetoxdrinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetoxdrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
