import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-documentacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './documentacion.component.html',
  styleUrl: './documentacion.component.css',
})
export class DocumentacionComponent {
  textoAmpliado: string | null = null;
  textoTitulo: string = '';
  imagenAmpliada: string | null = null;
  constructor(private router: Router) {}

  abrirImagen(img: { alt: string; src: string }) {
    if (img.alt === 'Interfaz de Usuario') {
      this.router.navigateByUrl('/');
    } else {
      this.imagenAmpliada = img.src;
    }
  }

  ampliarTexto(texto: string, titulo: string) {
    this.textoAmpliado = texto;
    this.textoTitulo = titulo;
  }

  cerrarTextoAmpliado() {
    this.textoAmpliado = null;
    this.textoTitulo = '';
  }
  recortarTexto(texto: string, limite: number): string {
    if (!texto) return '';
    return texto.length > limite ? texto.substring(0, limite) + '...' : texto;
  }

  secciones = [
    {
      titulo: '1. Diseño de Alto Nivel',
      items: ['Diagrama de Clases', 'Diagrama de Despliegue'],
      imagenes: [
        {
          src: 'assets/alto-nivel/diagrama-clases.png',
          alt: 'Diagrama de Clases',
        },
        {
          src: 'assets/alto-nivel/diagrama-despliegue.png',
          alt: 'Diagrama de Despliegue',
        },
      ],
    },
    {
      titulo: '2. Diseño de Bajo Nivel',
      items: [
        'Diagrama detallado de casos de uso',
        'Diagrama de Secuencia',
        'Interfaces de Usuario',
      ],
      imagenes: [
        {
          src: 'assets/bajo-nivel/diagrama-casos-uso.png',
          alt: 'Casos de Uso',
        },
        { src: 'assets/bajo-nivel/diagrama-secuencia.png', alt: 'Secuencia' },
        {
          src: 'assets//bajo-nivel/interfaz-usuario.png',
          alt: 'Interfaz de Usuario',
        },
      ],
    },
    {
      titulo: '3. Diseño de Base de Datos',
      items: [
        'Diseño Lógico',
        'Diagrama Entidad-Relación',
        'Script',
        'Auditoría',
      ],
      imagenes: [
        { src: 'assets/base-de-datos/diagrama-er.png', alt: 'Diagrama ER' },
      ],
      disenoLogico: `
USUARIO (
  id STRING PRIMARY KEY,
  nombre STRING,
  correo STRING UNIQUE,
  clave STRING,
  activo BOOLEAN
)

PRODUCTO (
  id STRING PRIMARY KEY,
  tipo STRING,
  saldo DOUBLE,
  estado STRING,
  id_usuario STRING,
  FOREIGN KEY (id_usuario) REFERENCES USUARIO(id)
)

AHORRO (
  id STRING PRIMARY KEY,
  saldo DOUBLE,
  tasaInteres DOUBLE,
  estado STRING,
  FOREIGN KEY (id) REFERENCES PRODUCTO(id)
)

CDAT (
  id STRING PRIMARY KEY,
  montoInvertido DOUBLE,
  plazo INT,
  tasaInteres DOUBLE,
  fechaVencimiento DATE,
  FOREIGN KEY (id) REFERENCES PRODUCTO(id)
)

CREDITO (
  id STRING PRIMARY KEY,
  monto DOUBLE,
  saldoPendiente DOUBLE,
  estado STRING,
  FOREIGN KEY (id) REFERENCES PRODUCTO(id)
)

MOVIMIENTO (
  id STRING PRIMARY KEY,
  fecha DATE,
  tipo STRING,
  valor DOUBLE,
  descripcion STRING,
  id_producto STRING,
  FOREIGN KEY (id_producto) REFERENCES PRODUCTO(id)
)

CUENTA (
  numero STRING PRIMARY KEY,
  tipo STRING,
  id_usuario STRING,
  FOREIGN KEY (id_usuario) REFERENCES USUARIO(id)
)

TRANSFERENCIA (
  id STRING PRIMARY KEY,
  fecha DATE,
  monto DOUBLE,
  cuentaOrigen STRING,
  cuentaDestino STRING,
  id_usuario STRING,
  FOREIGN KEY (cuentaOrigen) REFERENCES CUENTA(numero),
  FOREIGN KEY (cuentaDestino) REFERENCES CUENTA(numero),
  FOREIGN KEY (id_usuario) REFERENCES USUARIO(id)
)

BENEFICIARIO (
  id STRING PRIMARY KEY,
  nombre STRING,
  cuentaDestino STRING,
  banco STRING,
  id_usuario STRING,
  FOREIGN KEY (id_usuario) REFERENCES USUARIO(id)
)
  `.trim(),
      script: `
-- ===============================
-- Tabla: Usuario
-- ===============================
CREATE TABLE Usuario (
  id VARCHAR(50) PRIMARY KEY,
  nombre VARCHAR(100),
  correo VARCHAR(100) UNIQUE,
  clave VARCHAR(100),
  activo BOOLEAN
);

-- ===============================
-- Tabla: Cuenta
-- ===============================
CREATE TABLE Cuenta (
  numero VARCHAR(30) PRIMARY KEY,
  tipo VARCHAR(50),
  id_usuario VARCHAR(50),
  FOREIGN KEY (id_usuario) REFERENCES Usuario(id)
);

-- ===============================
-- Tabla: Transferencia
-- ===============================
CREATE TABLE Transferencia (
  id VARCHAR(50) PRIMARY KEY,
  fecha DATE,
  monto DECIMAL(10,2),
  cuentaOrigen VARCHAR(30),
  cuentaDestino VARCHAR(30),
  id_usuario VARCHAR(50),
  FOREIGN KEY (cuentaOrigen) REFERENCES Cuenta(numero),
  FOREIGN KEY (cuentaDestino) REFERENCES Cuenta(numero),
  FOREIGN KEY (id_usuario) REFERENCES Usuario(id)
);

-- ===============================
-- Tabla: Producto
-- ===============================
CREATE TABLE Producto (
  id VARCHAR(50) PRIMARY KEY,
  tipo VARCHAR(30), -- Puede ser 'Ahorro', 'CDAT', 'Credito'
  saldo DECIMAL(10,2),
  estado VARCHAR(30),
  id_usuario VARCHAR(50),
  FOREIGN KEY (id_usuario) REFERENCES Usuario(id)
);

-- ===============================
-- Tabla: Ahorro
-- ===============================
CREATE TABLE Ahorro (
  id VARCHAR(50) PRIMARY KEY,
  saldo DECIMAL(10,2),
  tasaInteres DECIMAL(5,2),
  estado VARCHAR(30),
  FOREIGN KEY (id) REFERENCES Producto(id)
);

-- ===============================
-- Tabla: CDAT
-- ===============================
CREATE TABLE CDAT (
  id VARCHAR(50) PRIMARY KEY,
  montoInvertido DECIMAL(10,2),
  plazo INT,
  tasaInteres DECIMAL(5,2),
  fechaVencimiento DATE,
  FOREIGN KEY (id) REFERENCES Producto(id)
);

-- ===============================
-- Tabla: Credito
-- ===============================
CREATE TABLE Credito (
  id VARCHAR(50) PRIMARY KEY,
  monto DECIMAL(10,2),
  saldoPendiente DECIMAL(10,2),
  estado VARCHAR(30),
  FOREIGN KEY (id) REFERENCES Producto(id)
);

-- ===============================
-- Tabla: Movimiento
-- ===============================
CREATE TABLE Movimiento (
  id VARCHAR(50) PRIMARY KEY,
  fecha DATE,
  tipo VARCHAR(30),
  valor DECIMAL(10,2),
  descripcion TEXT,
  id_producto VARCHAR(50),
  FOREIGN KEY (id_producto) REFERENCES Producto(id)
);

-- ===============================
-- Tabla: Beneficiario
-- ===============================
CREATE TABLE Beneficiario (
  id VARCHAR(50) PRIMARY KEY,
  nombre VARCHAR(100),
  cuentaDestino VARCHAR(30),
  banco VARCHAR(50),
  id_usuario VARCHAR(50),
  FOREIGN KEY (id_usuario) REFERENCES Usuario(id)
);
      `.trim(),
    },
  ];
}
