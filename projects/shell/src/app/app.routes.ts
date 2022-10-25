import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'flights',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './Module'
      })
      .then(m => m.FlightsModule)
  },
  {
    path: 'login',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        exposedModule: './Module'
      })
        .then(m => m.App2Module)
  },
  {path : '', redirectTo: 'home', pathMatch: 'full'},
  {path : '**', component: NotFoundComponent}
]

export const APP_ROUTES = routes;
