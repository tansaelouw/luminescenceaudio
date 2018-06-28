import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { NoContentComponent } from './no-content';

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home',  component: HomeComponent, data: { state: 'home'} },
  { path: 'products', loadChildren: './products#ProductModule'},
  { path: 'pages', loadChildren: './pages#PagesModule'},
  { path: '**',    component: NoContentComponent },
];