import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IlutecComponent } from './ilutec/ilutec.component';

const routes: Routes = [
  {
    path:'',
    children: [
      {
        path: 'ilutec', component: IlutecComponent
      },
      {
        path:'**', redirectTo: 'basicos'
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class TrabajosRoutingModule { }
