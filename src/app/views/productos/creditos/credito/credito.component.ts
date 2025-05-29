import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-credito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './credito.component.html',
  styleUrl: './credito.component.css',
})
export class CreditoComponent {
  paginaActual = 0;
  porPagina = 7;

  get registrosPaginados() {
    const inicio = this.paginaActual * this.porPagina;
    return this.creditos.slice(inicio, inicio + this.porPagina); // cambia a cuentas o productos según el caso
  }

  get haySiguiente(): boolean {
    return (this.paginaActual + 1) * this.porPagina < this.creditos.length;
  }

  get hayAnterior(): boolean {
    return this.paginaActual > 0;
  }

  siguiente() {
    if (this.haySiguiente) this.paginaActual++;
  }

  anterior() {
    if (this.hayAnterior) this.paginaActual--;
  }

  creditos = [
    {
      id: 'c1',
      monto: 3000000,
      saldoPendiente: 1200000,
      estado: 'Activo',
      usuario: 'Ana Torres',
    },
    {
      id: 'c2',
      monto: 5000000,
      saldoPendiente: 0,
      estado: 'Pagado',
      usuario: 'Carlos Pérez',
    },
    {
      id: 'c3',
      monto: 2500000,
      saldoPendiente: 2500000,
      estado: 'En mora',
      usuario: 'Luisa Gómez',
    },
  ];
}
