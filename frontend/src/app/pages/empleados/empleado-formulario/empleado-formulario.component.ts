import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpleadoService } from '/home/andres/Documentos/github/prueba-tecnica-2/frontend/src/app/services/empleado.service';

@Component({
  selector: 'app-empleado-formulario',
  standalone: true,
  imports: [ReactiveFormsModule], // 👈 Agrega esto
  templateUrl: './empleado-formulario.component.html'
})
export class EmpleadoFormularioComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private empleadoService: EmpleadoService
  ) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cargo: ['', Validators.required],
      departamento: ['', Validators.required]
    });
  }

  guardar(): void {
    if (this.form.valid) {
      this.empleadoService.crearEmpleado(this.form.value).subscribe({
        next: () => {
          alert('Empleado creado con éxito');
          this.form.reset();
        },
        error: () => alert('Error al crear empleado')
      });
    }
  }
}
