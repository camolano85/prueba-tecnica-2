import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmpleadoService, Empleado } from '/home/andres/Documentos/github/prueba-tecnica-2/frontend/src/app/services/empleado.service';

@Component({
  selector: 'app-empleado-lista',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './empleado-lista.component.html',
})
export class EmpleadoListaComponent implements OnInit {
  empleados: Empleado[] = [];

  constructor(private empleadoService: EmpleadoService) {}

  ngOnInit(): void {
    this.empleadoService.getEmpleados().subscribe({
      next: (data) => this.empleados = data,
      error: () => alert('Error al obtener empleados'),
    });
  }

  eliminarEmpleado(id: string): void {
    if (confirm('¿Estás seguro de eliminar este empleado?')) {
      this.empleadoService.deleteEmpleado(id).subscribe({
        next: () => {
          this.empleados = this.empleados.filter(emp => emp._id !== id);
        },
        error: () => alert('Error al eliminar el empleado'),
      });
    }
  }
}
