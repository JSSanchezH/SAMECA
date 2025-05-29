import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  funcionalidades = [
    'Consulta de saldo y movimientos',
    'Transferencias bancarias',
    'Pagos de servicios',
    'Solicitud y gestión de créditos',
    'Notificaciones y alertas de seguridad',
    'Generación de reportes en PDF/Excel',
  ];

  tecnologias = [
    'Autenticación biométrica (MFA)',
    'Encriptación de datos (TLS 1.2+, AES-256)',
    'Backend: Java + Spring Boot (microservicios)',
    'Frontend: Angular (PWA)',
    'Base de datos: PostgreSQL',
    'Despliegue: Docker, NGINX',
  ];
}
