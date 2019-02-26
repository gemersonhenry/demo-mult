import { Routes } from '@angular/router';
import { TodosComponent } from './views/todos/todos.component';
import { AutosComponent } from './views/autos/autos.component';
import { HogarComponent } from './views/hogar/hogar.component';
import { SaludComponent } from './views/salud/salud.component';

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'todos',
    pathMatch: 'full'
  },
  {
    path: 'todos',
    component: TodosComponent
  },
  {
    path: 'autos',
    component: AutosComponent
  },
  {
    path: 'hogar',
    component: HogarComponent,
  },
  {
    path: 'salud',
    component: SaludComponent,
  }
];