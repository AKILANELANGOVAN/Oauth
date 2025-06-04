// app.routes.ts or inside AppRoutingModule
import { Routes } from '@angular/router';
import { Login } from '../login/login';
import { Home } from '../home/home';



export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('../home/home').then((m) => m.Home),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('../login/login').then((m) => m.Login),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
