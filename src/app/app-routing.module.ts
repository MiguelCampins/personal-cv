import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'trabajos',
    loadChildren: () => import('./trabajos/trabajos.module').then(m => m.TrabajosModule)
  },
  {
    path: '**',
    redirectTo: 'template'
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
