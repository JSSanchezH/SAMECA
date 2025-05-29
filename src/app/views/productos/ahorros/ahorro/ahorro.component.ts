import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ahorro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ahorro.component.html',
  styleUrl: './ahorro.component.css',
})
export class AhorroComponent {
  paginaActual = 0;
  porPagina = 7;

  ahorros = [
    {
      id: 'a1',
      saldo: 1200000,
      tasaInteres: 1.5,
      estado: 'Activo',
      usuario: 'Ana Torres',
    },
    {
      id: 'a2',
      saldo: 890000,
      tasaInteres: 1.3,
      estado: 'Activo',
      usuario: 'Carlos Pérez',
    },
    {
      id: 'a3',
      saldo: 0,
      tasaInteres: 1.2,
      estado: 'Inactivo',
      usuario: 'Luisa Gómez',
    },
    {
      id: 'a4',
      saldo: 250000,
      tasaInteres: 1.4,
      estado: 'Activo',
      usuario: 'Valeria Castro',
    },
    {
      id: 'a5',
      saldo: 1000000,
      tasaInteres: 1.5,
      estado: 'Activo',
      usuario: 'Pedro Ríos',
    },
    {
      id: 'a6',
      saldo: 450000,
      tasaInteres: 1.6,
      estado: 'Inactivo',
      usuario: 'Mariana Díaz',
    },
    {
      id: 'a7',
      saldo: 300000,
      tasaInteres: 1.7,
      estado: 'Activo',
      usuario: 'Héctor Molina',
    },
    {
      id: 'a8',
      saldo: 750000,
      tasaInteres: 1.2,
      estado: 'Activo',
      usuario: 'Claudia Gil',
    },
  ];

  get ahorrosPaginados() {
    const inicio = this.paginaActual * this.porPagina;
    return this.ahorros.slice(inicio, inicio + this.porPagina);
  }

  get haySiguiente() {
    return (this.paginaActual + 1) * this.porPagina < this.ahorros.length;
  }

  get hayAnterior() {
    return this.paginaActual > 0;
  }

  siguiente() {
    if (this.haySiguiente) this.paginaActual++;
  }

  anterior() {
    if (this.hayAnterior) this.paginaActual--;
  }
}
