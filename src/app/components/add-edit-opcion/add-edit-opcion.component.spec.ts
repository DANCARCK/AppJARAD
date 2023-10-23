import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditOpcionComponent } from './add-edit-opcion.component';

describe('AddEditOpcionComponent', () => {
  let component: AddEditOpcionComponent;
  let fixture: ComponentFixture<AddEditOpcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditOpcionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditOpcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
