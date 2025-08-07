import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmpleadoListaComponent } from '../empleados/empleado-lista/empleado-lista.component';
import { DepartamentoListaComponent } from '../departamentos/departamento-lista/departamento-lista.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    EmpleadoListaComponent,
    DepartamentoListaComponent
  ],
  template: `
    <div class="container mt-5">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a
            class="nav-link"
            [class.active]="seccion === 'empleados'"
            (click)="seccion = 'empleados'"
          >
            Empleados
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            [class.active]="seccion === 'departamentos'"
            (click)="seccion = 'departamentos'"
          >
            Departamentos
          </a>
        </li>
      </ul>

      <div class="mt-4" *ngIf="seccion === 'empleados'">
        <div class="d-flex justify-content-between align-items-center mb-4">
          <h2 class="fw-bold">Listado de Empleados</h2>
          <a routerLink="/empleados/nuevo" class="btn btn-success">
            <i class="bi bi-plus-circle me-1"></i> Crear Empleado
          </a>
        </div>
        <app-empleado-lista></app-empleado-lista>
      </div>

      <div class="mt-4" *ngIf="seccion === 'departamentos'">
        <div class="d-flex justify-content-between align-items-center mb-4">
          <h2 class="fw-bold">Listado de Departamentos</h2>
          <a routerLink="/departamentos/crear" class="btn btn-success">
            <i class="bi bi-plus-circle me-1"></i> Crear Departamento
          </a>
        </div>
        <app-departamento-lista></app-departamento-lista>
      </div>
    </div>
  `
})
export class DashboardComponent {
  seccion: 'empleados' | 'departamentos' = 'empleados';
}






