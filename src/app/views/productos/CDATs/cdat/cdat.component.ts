import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cdat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cdat.component.html',
  styleUrl: './cdat.component.css',
})
export class CDATComponent {
  paginaActual = 0;
  porPagina = 7;

  cdats = [
    {
      id: 'cd1',
      monto: 3000000,
      plazo: 180,
      tasaInteres: 7.2,
      fechaVencimiento: '2025-12-30',
      usuario: 'Ana Torres',
    },
    {
      id: 'cd2',
      monto: 5000000,
      plazo: 360,
      tasaInteres: 8.1,
      fechaVencimiento: '2026-06-15',
      usuario: 'Carlos Pérez',
    },
    {
      id: 'cd3',
      monto: 2000000,
      plazo: 90,
      tasaInteres: 6.5,
      fechaVencimiento: '2025-08-10',
      usuario: 'Luisa Gómez',
    },
    {
      id: 'cd4',
      monto: 4000000,
      plazo: 120,
      tasaInteres: 6.9,
      fechaVencimiento: '2025-09-25',
      usuario: 'Pedro Ríos',
    },
  ];

  get cdatsPaginados() {
    const inicio = this.paginaActual * this.porPagina;
    return this.cdats.slice(inicio, inicio + this.porPagina);
  }

  get haySiguiente() {
    return (this.paginaActual + 1) * this.porPagina < this.cdats.length;
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
