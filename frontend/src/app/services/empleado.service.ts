import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// ✅ Interfaz Empleado (coincide con tu backend y HTML)
export interface Empleado {
  _id?: string;
  codigo: number;
  nombre: string;
  apellido1: string;
  apellido2: string;
  codigo_departamento: number;
}

@Injectable({ providedIn: 'root' })
export class EmpleadoService {
  private apiUrl = 'http://localhost:3000/api/empleados'; // Ajusta si tu backend tiene otra URL

  constructor(private http: HttpClient) {}

  // ✅ Crear nuevo empleado
  crearEmpleado(data: Empleado): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  // ✅ Obtener empleados
  getEmpleados(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(this.apiUrl);
  }
}

