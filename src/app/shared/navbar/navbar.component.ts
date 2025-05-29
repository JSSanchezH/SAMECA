import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  rutas = [
    { label: 'Inicio', path: '/' },
    {
      label: 'Usuarios',
      sub: [
        { label: 'Ver lista', path: '/usuarios' },
        { label: 'Crear usuario', path: '/usuarios/nuevo' },
      ],
    },
    {
      label: 'Cuentas',
      path: '/cuentas',
    },
    {
      label: 'Transferencias',
      path: '/transferencias',
    },
    {
      label: 'Productos',
      sub: [
        { label: 'Ver lista', path: '/productos' },
        { label: 'Créditos', path: '/productos/creditos' },
        { label: 'Ahorro', path: '/productos/ahorros' },
        { label: 'CDATs', path: '/productos/CDATs' },
      ],
    },
  ];
}
