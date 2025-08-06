import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- Importar esto
import { Router } from '@angular/router';
import { DepartamentoService, Departamento } from '/home/andres/Documentos/github/prueba-tecnica-2/frontend/src/app/services/departamento.service';

@Component({
  selector: 'app-departamento-lista',
  standalone: true,
  imports: [CommonModule], // <-- Agregar aquí
  templateUrl: './departamento-lista.component.html',
})
export class DepartamentoListaComponent implements OnInit {
  departamentos: Departamento[] = [];

  constructor(
    private departamentoService: DepartamentoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.obtenerDepartamentos();
  }

  obtenerDepartamentos(): void {
    this.departamentoService.getDepartamentos().subscribe((data) => {
      this.departamentos = data;
    });
  }

  editar(id: string): void {
    this.router.navigate(['/departamentos/editar', id]);
  }

  eliminar(id: string): void {
    if (confirm('¿Estás seguro de eliminar este departamento?')) {
      this.departamentoService.deleteDepartamento(id).subscribe(() => {
        this.obtenerDepartamentos();
      });
    }
  }
}
