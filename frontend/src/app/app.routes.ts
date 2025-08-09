import { Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

// Formularios (standalone)
import { EmpleadoFormularioComponent } from './pages/empleados/empleado-formulario/empleado-formulario.component';
import { DepartamentoFormularioComponent } from './pages/departamentos/departamento-formulario/departamento-formulario.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },

  // Dashboard con pestañas (empleados/departamentos)
  { path: 'dashboard', component: DashboardComponent },

  // Empleados
  { path: 'empleados/nuevo', component: EmpleadoFormularioComponent },
  { path: 'empleados/editar/:id', component: EmpleadoFormularioComponent },

  // Departamentos
  { path: 'departamentos/crear', component: DepartamentoFormularioComponent },
  { path: 'departamentos/editar/:id', component: DepartamentoFormularioComponent },

  // Wildcard
  { path: '**', redirectTo: 'dashboard' },
];


