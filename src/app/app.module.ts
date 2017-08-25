import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//importacion de los componentes
import { AppComponent } from './app.component';
import { LoginComponent } from 'app/componentes/login/login.component';
import { ErrorComponent } from 'app/componentes/error/error.component';
import { RegistroComponent } from 'app/componentes/registro/registro.component';
import { ListadoLibrosComponent } from 'app/componentes/clientes/listado-libros/listado-libros.component';
import { AltaLibrosComponent } from 'app/componentes/admin/alta-libros/alta-libros.component';
//importacion del archivo con las rutas
import { routing } from "app/app.routing";
import { DatosUsuarioComponent } from 'app/componentes/clientes/datos-usuario/datos-usuario.component';
import { PedidosClienteComponent } from 'app/componentes/clientes/pedidos-cliente/pedidos-cliente.component';
import { ListadoClientesComponent } from 'app/componentes/admin/listado-clientes/listado-clientes.component';
import { ListadoPedidosComponent } from 'app/componentes/admin/listado-pedidos/listado-pedidos.component';
import { CarritoComponent } from 'app/componentes/clientes/carrito/carrito.component';
import { GestionLibrosComponent } from 'app/componentes/admin/gestion-libros/gestion-libros.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    RegistroComponent,
    ListadoLibrosComponent,
    AltaLibrosComponent,
    DatosUsuarioComponent,
    PedidosClienteComponent,
    ListadoClientesComponent,
    ListadoPedidosComponent,
    CarritoComponent,
    GestionLibrosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
