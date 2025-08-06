import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadoService, Empleado } from '/home/andres/Documentos/github/prueba-tecnica-2/frontend/src/app/services/empleado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empleado-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './empleado-lista.component.html',
})
export class EmpleadoListaComponent implements OnInit {
  empleados: Empleado[] = [];

  constructor(
    private empleadoService: EmpleadoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  obtenerEmpleados(): void {
    this.empleadoService.getEmpleados().subscribe((data) => {
      this.empleados = data;
    });
  }

  eliminar(id: string): void {
    if (confirm('¿Estás seguro de eliminar este empleado?')) {
      this.empleadoService.deleteEmpleado(id).subscribe(() => {
        this.obtenerEmpleados();
      });
    }
  }

  editar(id: string): void {
    this.router.navigate(['/empleados/editar', id]);
  }

  crear(): void {
    this.router.navigate(['/empleados/nuevo']);
  }
}

