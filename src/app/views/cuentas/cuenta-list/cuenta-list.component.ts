import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cuenta-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cuenta-list.component.html',
  styleUrl: './cuenta-list.component.css',
})
export class CuentaListComponent {
  paginaActual = 0;
  porPagina = 7;

  get cuentasPaginadas() {
    const inicio = this.paginaActual * this.porPagina;
    return this.cuentas.slice(inicio, inicio + this.porPagina);
  }

  siguiente() {
    if ((this.paginaActual + 1) * this.porPagina < this.cuentas.length) {
      this.paginaActual++;
    }
  }

  anterior() {
    if (this.paginaActual > 0) {
      this.paginaActual--;
    }
  }
  cuentas = [
    { numero: '1001', tipo: 'Ahorros', usuario: 'Ana Torres' },
    { numero: '1002', tipo: 'Corriente', usuario: 'Carlos Pérez' },
    { numero: '1003', tipo: 'Ahorros', usuario: 'Luisa Gómez' },
    { numero: '1004', tipo: 'CDAT', usuario: 'Pedro Ríos' },
    { numero: '1005', tipo: 'Crédito', usuario: 'Mariana Díaz' },
  ];
}
