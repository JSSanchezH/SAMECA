import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { DocumentacionComponent } from './views/documentacion/documentacion.component';
import { UsuarioListComponent } from './views/usuarios/usuario-list/usuario-list.component';
import { UsuarioFormComponent } from './views/usuarios/nuevos/usuario-form/usuario-form.component';
import { CuentaListComponent } from './views/cuentas/cuenta-list/cuenta-list.component';
import { TransferenciaComponent } from './views/transferencias/transferencia/transferencia.component';
import { ProductoListComponent } from './views/productos/producto-list/producto-list.component';
import { CreditoComponent } from './views/productos/creditos/credito/credito.component';
import { AhorroComponent } from './views/productos/ahorros/ahorro/ahorro.component';
import { CDATComponent } from './views/productos/CDATs/cdat/cdat.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Inicio' },
  {
    path: 'documentacion',
    component: DocumentacionComponent,
    title: 'Documentacion',
  },
  { path: 'usuarios', component: UsuarioListComponent, title: 'Usuarios' },
  { path: 'usuarios/nuevo', component: UsuarioFormComponent },
  { path: 'cuentas', component: CuentaListComponent },
  { path: 'transferencias', component: TransferenciaComponent },
  { path: 'productos', component: ProductoListComponent },
  { path: 'productos/creditos', component: CreditoComponent },
  { path: 'productos/ahorros', component: AhorroComponent },
  { path: 'productos/CDATs', component: CDATComponent },
];
