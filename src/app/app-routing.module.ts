import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
    children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
    ]
  },
  {
    path: '**',
    redirectTo: 'common/not-found'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}