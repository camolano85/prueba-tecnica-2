import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpleadoService, Empleado } from '/home/andres/Documentos/github/prueba-tecnica-2/frontend/src/app/services/empleado.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-empleado-formulario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './empleado-formulario.component.html',
})
export class EmpleadoFormularioComponent implements OnInit {
  form: FormGroup;
  editando = false;
  idEmpleado!: string;

  constructor(
    private fb: FormBuilder,
    private empleadoService: EmpleadoService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.fb.group({
      codigo: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido1: ['', Validators.required],
      apellido2: ['', Validators.required],
      codigo_departamento: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.idEmpleado = this.route.snapshot.paramMap.get('id') || '';
    if (this.idEmpleado) {
      this.editando = true;
      this.empleadoService.getEmpleado(this.idEmpleado).subscribe((empleado) => {
        this.form.patchValue(empleado);
      });
    }
  }

  guardar(): void {
    if (this.form.valid) {
      const datos = this.form.value;
      if (this.editando) {
        this.empleadoService.actualizarEmpleado(this.idEmpleado, datos).subscribe({
          next: () => {
            alert('Empleado actualizado');
            this.router.navigate(['/dashboard']);
          },
          error: () => alert('Error al actualizar empleado')
        });
      } else {
        this.empleadoService.crearEmpleado(datos).subscribe({
          next: () => {
            alert('Empleado creado con éxito');
            this.form.reset();
            this.router.navigate(['/dashboard']);
          },
          error: () => alert('Error al crear empleado')
        });
      }
    }
  }
}

