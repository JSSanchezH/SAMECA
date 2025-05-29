import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { DocumentacionComponent } from './views/documentacion/documentacion.component';
import { UsuarioListComponent } from './views/usuarios/usuario-list/usuario-list.component';
import { UsuarioFormComponent } from './views/usuarios/nuevos/usuario-form/usuario-form.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Inicio' },
  {
    path: 'documentacion',
    component: DocumentacionComponent,
    title: 'Documentacion',
  },
  { path: 'usuarios', component: UsuarioListComponent, title: 'Usuarios' },
  { path: 'usuarios/nuevo', component: UsuarioFormComponent },
];
