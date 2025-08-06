import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // ✅ Importar esto

@Component({
  selector: 'app-navbar',
  standalone: true, // ✅ Necesario si estás usando standalone components
  imports: [CommonModule], // ✅ Importar CommonModule para que funcione *ngIf
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private router: Router) {}

  get isLoggedIn(): boolean {
    return !!localStorage.getItem('token'); // true si hay token
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}


