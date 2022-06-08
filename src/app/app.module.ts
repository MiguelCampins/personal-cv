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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InfoComponent,
    SidebarComponent,
    SidebarRightComponent,
    PerfilComponent,
    TrabajosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
