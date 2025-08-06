import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartamentoService, Departamento } from '/home/andres/Documentos/github/prueba-tecnica-2/frontend/src/app/services/departamento.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-departamento-formulario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './departamento-formulario.component.html'
})
export class DepartamentoFormularioComponent {
  formulario: FormGroup;
  id: string | null = null;
  esEdicion: boolean = false;

  constructor(
    private fb: FormBuilder,
    private departamentoService: DepartamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.esEdicion = !!this.id;

    if (this.esEdicion && this.id) {
      this.departamentoService.getDepartamento(this.id).subscribe((data) => {
        this.formulario.patchValue(data);
      });
    }
  }

  guardar() {
    if (this.formulario.invalid) return;

    const datos: Departamento = this.formulario.value;

    if (this.esEdicion && this.id) {
      this.departamentoService.updateDepartamento(this.id, datos).subscribe(() => {
        this.router.navigate(['/departamentos']);
      });
    } else {
      this.departamentoService.createDepartamento(datos).subscribe(() => {
        this.router.navigate(['/departamentos']);
      });
    }
  }
}


