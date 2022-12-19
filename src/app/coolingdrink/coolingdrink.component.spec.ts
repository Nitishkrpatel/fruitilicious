import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolingdrinkComponent } from './coolingdrink.component';

describe('CoolingdrinkComponent', () => {
  let component: CoolingdrinkComponent;
  let fixture: ComponentFixture<CoolingdrinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoolingdrinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoolingdrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
