import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentoLista } from './departamento-lista';

describe('DepartamentoLista', () => {
  let component: DepartamentoLista;
  let fixture: ComponentFixture<DepartamentoLista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepartamentoLista]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartamentoLista);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
