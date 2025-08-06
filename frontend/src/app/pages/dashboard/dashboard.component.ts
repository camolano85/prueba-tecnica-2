import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmpleadoListaComponent } from '../empleados/empleado-lista/empleado-lista.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, EmpleadoListaComponent],
  template: `
    <div class="container mt-5">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h2 class="fw-bold">Listado de Empleados</h2>
        <a routerLink="/empleados/nuevo" class="btn btn-success">
          <i class="bi bi-plus-circle me-1"></i> Crear Empleado
        </a>
      </div>

      <app-empleado-lista></app-empleado-lista>
    </div>
  `
})
export class DashboardComponent {}





