import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usuario-list.component.html',
  styleUrl: './usuario-list.component.css',
})
export class UsuarioListComponent {
  paginaActual = 0;
  porPagina = 7;

  get usuariosPaginados() {
    const inicio = this.paginaActual * this.porPagina;
    return this.usuarios.slice(inicio, inicio + this.porPagina);
  }

  siguiente() {
    if ((this.paginaActual + 1) * this.porPagina < this.usuarios.length) {
      this.paginaActual++;
    }
  }

  anterior() {
    if (this.paginaActual > 0) {
      this.paginaActual--;
    }
  }
  usuarios = [
    { id: 'u1', nombre: 'Ana Torres', correo: 'ana@example.com', activo: true },
    {
      id: 'u2',
      nombre: 'Carlos Pérez',
      correo: 'carlos@example.com',
      activo: false,
    },
    {
      id: 'u3',
      nombre: 'Luisa Gómez',
      correo: 'luisa@example.com',
      activo: true,
    },
    {
      id: 'u4',
      nombre: 'Pedro Ríos',
      correo: 'pedro@example.com',
      activo: true,
    },
    {
      id: 'u5',
      nombre: 'Mariana Díaz',
      correo: 'mariana@example.com',
      activo: false,
    },
    {
      id: 'u6',
      nombre: 'Esteban Ramírez',
      correo: 'esteban@example.com',
      activo: true,
    },
    {
      id: 'u7',
      nombre: 'Natalia Herrera',
      correo: 'natalia@example.com',
      activo: true,
    },
    {
      id: 'u8',
      nombre: 'Luis Ortega',
      correo: 'luis@example.com',
      activo: false,
    },
    {
      id: 'u9',
      nombre: 'Valeria Castro',
      correo: 'valeria@example.com',
      activo: true,
    },
    {
      id: 'u10',
      nombre: 'Daniel Gómez',
      correo: 'daniel@example.com',
      activo: false,
    },
    {
      id: 'u11',
      nombre: 'Camila Rodríguez',
      correo: 'camila@example.com',
      activo: true,
    },
    {
      id: 'u12',
      nombre: 'Juan Fernández',
      correo: 'juan@example.com',
      activo: true,
    },
    {
      id: 'u13',
      nombre: 'Sofía Morales',
      correo: 'sofia@example.com',
      activo: true,
    },
    {
      id: 'u14',
      nombre: 'Diego Castillo',
      correo: 'diego@example.com',
      activo: false,
    },
    {
      id: 'u15',
      nombre: 'Andrea Ruiz',
      correo: 'andrea@example.com',
      activo: true,
    },
    {
      id: 'u16',
      nombre: 'Mateo Vargas',
      correo: 'mateo@example.com',
      activo: true,
    },
    {
      id: 'u17',
      nombre: 'Fernanda Silva',
      correo: 'fernanda@example.com',
      activo: false,
    },
    {
      id: 'u18',
      nombre: 'Héctor Molina',
      correo: 'hector@example.com',
      activo: true,
    },
    {
      id: 'u19',
      nombre: 'Isabel León',
      correo: 'isabel@example.com',
      activo: true,
    },
    {
      id: 'u20',
      nombre: 'Ricardo Peña',
      correo: 'ricardo@example.com',
      activo: false,
    },
    {
      id: 'u21',
      nombre: 'Elena Navarro',
      correo: 'elena@example.com',
      activo: true,
    },
    {
      id: 'u22',
      nombre: 'Tomás Medina',
      correo: 'tomas@example.com',
      activo: true,
    },
    {
      id: 'u23',
      nombre: 'Claudia Gil',
      correo: 'claudia@example.com',
      activo: false,
    },
    {
      id: 'u24',
      nombre: 'Gabriel Torres',
      correo: 'gabriel@example.com',
      activo: true,
    },
    {
      id: 'u25',
      nombre: 'Patricia Soto',
      correo: 'patricia@example.com',
      activo: true,
    },
  ];
}
