import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-producto-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto-list.component.html',
  styleUrl: './producto-list.component.css',
})
export class ProductoListComponent {
  paginaActual = 0;
  porPagina = 7;

  get productosPaginados() {
    const inicio = this.paginaActual * this.porPagina;
    return this.productos.slice(inicio, inicio + this.porPagina);
  }

  siguiente() {
    if ((this.paginaActual + 1) * this.porPagina < this.productos.length) {
      this.paginaActual++;
    }
  }

  anterior() {
    if (this.paginaActual > 0) {
      this.paginaActual--;
    }
  }
  productos = [
    {
      id: 'p1',
      tipo: 'Ahorro',
      saldo: 1250000,
      estado: 'Activo',
      usuario: 'Ana Torres',
    },
    {
      id: 'p2',
      tipo: 'CDAT',
      saldo: 2000000,
      estado: 'Activo',
      usuario: 'Carlos Pérez',
    },
    {
      id: 'p3',
      tipo: 'Crédito',
      saldo: -150000,
      estado: 'En mora',
      usuario: 'Luisa Gómez',
    },
    {
      id: 'p4',
      tipo: 'Ahorro',
      saldo: 890000,
      estado: 'Inactivo',
      usuario: 'Pedro Ríos',
    },
    {
      id: 'p5',
      tipo: 'Crédito',
      saldo: -500000,
      estado: 'Activo',
      usuario: 'Valeria Castro',
    },
  ];
}
