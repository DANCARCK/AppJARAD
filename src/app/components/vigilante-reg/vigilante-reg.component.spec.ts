import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VigilanteRegComponent } from './vigilante-reg.component';

describe('VigilanteRegComponent', () => {
  let component: VigilanteRegComponent;
  let fixture: ComponentFixture<VigilanteRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VigilanteRegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VigilanteRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
