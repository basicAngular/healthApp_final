import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
import {HomeComponent} from './pages/home/home.component';

export const routes: Routes = [
  { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule' },
  { path: 'admin', loadChildren: 'app/pages/login/login.module#LoginModule' },
  { path: 'register', loadChildren: 'app/pages/register/register.module#RegisterModule' },
  { path: 'home', component: HomeComponent },
  /*{ path: 'home', component: HomeComponent },  // about us page load component and give pathe here. */
  { path: '**', component: NotFoundComponent }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
   //useHash: true
});