import { Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { DocumentacionComponent } from './view/documentacion/documentacion.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Inicio' },
  {
    path: 'documentacion',
    component: DocumentacionComponent,
    title: 'Documentacion',
  },
];
