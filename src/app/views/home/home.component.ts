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
    {
      nombre: 'Autenticación biométrica (MFA)',
      url: 'https://developer.android.com/training/sign-in/biometric-auth',
    },
    {
      nombre: 'Encriptación de datos (TLS 1.2+, AES-256)',
      url: 'https://www.postgresql.org/docs/current/encryption-options.html',
    },
    {
      nombre: 'Backend: Java + Spring Boot (microservicios)',
      url: 'https://spring.io/projects/spring-boot',
    },
    {
      nombre: 'Frontend: Angular (PWA)',
      url: 'https://angular.io/guide/service-worker-intro',
    },
    {
      nombre: 'Base de datos: PostgreSQL',
      url: 'https://www.postgresql.org/docs/',
    },
    {
      nombre: 'Despliegue: Docker, NGINX',
      url: 'https://docs.docker.com/get-started/overview/',
    },
  ];
}
