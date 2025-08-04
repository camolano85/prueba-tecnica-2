import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoFormulario } from './empleado-formulario.component';

describe('EmpleadoFormulario', () => {
  let component: EmpleadoFormulario;
  let fixture: ComponentFixture<EmpleadoFormulario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpleadoFormulario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadoFormulario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
