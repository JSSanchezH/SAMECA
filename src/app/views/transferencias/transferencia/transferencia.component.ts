import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-transferencia',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './transferencia.component.html',
  styleUrl: './transferencia.component.css',
})
export class TransferenciaComponent {
  form = this.fb.group({
    cuentaOrigen: ['', Validators.required],
    cuentaDestino: ['', Validators.required],
    monto: [0, [Validators.required, Validators.min(1)]],
    descripcion: [''],
  });

  constructor(private fb: FormBuilder) {}

  enviar() {
    if (this.form.valid) {
      console.log('Transferencia realizada:', this.form.value);
      // Simular redirección luego del envío
      // this.router.navigateByUrl('/transferencias/historial');
    }
  }
}
