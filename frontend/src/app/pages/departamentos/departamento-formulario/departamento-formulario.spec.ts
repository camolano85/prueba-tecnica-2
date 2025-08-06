import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentoFormulario } from './departamento-formulario';

describe('DepartamentoFormulario', () => {
  let component: DepartamentoFormulario;
  let fixture: ComponentFixture<DepartamentoFormulario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepartamentoFormulario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartamentoFormulario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
