import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadoListaComponent } from '../empleados/empleado-lista/empleado-lista.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, EmpleadoListaComponent],
  template: `
    <h1>Dashboard</h1>
    <app-empleado-lista></app-empleado-lista>
  `
})
export class DashboardComponent {}

