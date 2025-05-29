import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-usuario-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './usuario-form.component.html',
  styleUrl: './usuario-form.component.css',
})
export class UsuarioFormComponent {
  form = this.fb.group({
    nombre: ['', Validators.required],
    correo: ['', [Validators.required, Validators.email]],
    clave: ['', Validators.required],
    activo: [true],
  });

  constructor(private fb: FormBuilder, private router: Router) {}

  guardar() {
    if (this.form.valid) {
      this.router.navigateByUrl('/usuarios');

      console.log('Usuario guardado:', this.form.value);
      // Aquí iría lógica para crear/editar
    }
  }
}
