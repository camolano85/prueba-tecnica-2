import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';

// Listas embebidas (standalone)
import { EmpleadoListaComponent } from '../empleados/empleado-lista/empleado-lista.component';
import { DepartamentoListaComponent } from '../departamentos/departamento-lista/departamento-lista.component';

type Tab = 'empleados' | 'departamentos';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, EmpleadoListaComponent, DepartamentoListaComponent],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  tab: Tab = 'empleados';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Permite abrir el dashboard directamente en una pestaña con ?t=empleados|departamentos
    const q = (this.route.snapshot.queryParamMap.get('t') as Tab) || null;
    if (q === 'empleados' || q === 'departamentos') this.tab = q;
  }

  setTab(next: Tab) {
    if (this.tab === next) return;
    this.tab = next;
    // Actualiza la URL manteniendo el estado
    this.router.navigate([], { relativeTo: this.route, queryParams: { t: next }, queryParamsHandling: 'merge' });
  }

  crear() {
    if (this.tab === 'empleados') {
      this.router.navigate(['/empleados/nuevo']);
    } else {
      this.router.navigate(['/departamentos/crear']);
    }
  }

  get titulo(): string {
    return this.tab === 'empleados' ? 'Listado de Empleados' : 'Listado de Departamentos';
  }

  get labelCrear(): string {
    return this.tab === 'empleados' ? 'Crear Empleado' : 'Crear Departamento';
  }
}







