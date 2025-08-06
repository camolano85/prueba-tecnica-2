import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmpleadoFormularioComponent } from './pages/empleados/empleado-formulario/empleado-formulario.component';
import { DepartamentoListaComponent } from './pages/departamentos/departamento-lista/departamento-lista.component';
import { DepartamentoFormularioComponent } from './pages/departamentos/departamento-formulario/departamento-formulario.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'empleados/nuevo', component: EmpleadoFormularioComponent },
  { path: 'empleados/editar/:id', component: EmpleadoFormularioComponent },
  { path: 'departamentos', component: DepartamentoListaComponent },
  { path: 'departamentos/crear', component: DepartamentoFormularioComponent }, // ✅ NUEVA RUTA
  { path: 'departamentos/editar/:id', component: DepartamentoFormularioComponent } // ✅ NUEVA RUTA
];


