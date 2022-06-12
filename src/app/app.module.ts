import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InfoComponent } from './info/info.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarRightComponent } from './sidebar-right/sidebar-right.component';
import { PerfilComponent } from './perfil/perfil.component';
import { TrabajosComponent } from './trabajos/trabajos.component';
import { AppRoutingModule } from './app-routing.module';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { TargetaProyectoComponent } from './proyectos/targeta-proyecto/targeta-proyecto.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InfoComponent,
    SidebarComponent,
    SidebarRightComponent,
    PerfilComponent,
    TrabajosComponent,
    ProyectosComponent,
    TargetaProyectoComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimeNgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
