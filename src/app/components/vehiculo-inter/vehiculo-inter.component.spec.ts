import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculoInterComponent } from './vehiculo-inter.component';

describe('VehiculoInterComponent', () => {
  let component: VehiculoInterComponent;
  let fixture: ComponentFixture<VehiculoInterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiculoInterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiculoInterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
