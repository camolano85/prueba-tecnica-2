import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoLista } from './empleado-lista';

describe('EmpleadoLista', () => {
  let component: EmpleadoLista;
  let fixture: ComponentFixture<EmpleadoLista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpleadoLista]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadoLista);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
