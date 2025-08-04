import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadoService, Empleado } from '/home/andres/Documentos/github/prueba-tecnica-2/frontend/src/app/services/empleado.service';

@Component({
  selector: 'app-empleado-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './empleado-lista.component.html',
})
export class EmpleadoListaComponent implements OnInit {
  empleados: Empleado[] = [];

  constructor(private empleadoService: EmpleadoService) {}

  ngOnInit(): void {
    this.empleadoService.getEmpleados().subscribe({
      next: (data) => this.empleados = data,
      error: (err) => alert('Error al obtener empleados'),
    });
  }
}
