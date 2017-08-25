import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from "app/componentes/login/login.component";
import { RegistroComponent } from "app/componentes/registro/registro.component";
import { ErrorComponent } from "app/componentes/error/error.component";
import { ModuleWithProviders } from "@angular/core";
import { ListadoLibrosComponent } from "app/componentes/clientes/listado-libros/listado-libros.component";
import { AltaLibrosComponent } from "app/componentes/admin/alta-libros/alta-libros.component";
import { PedidosClienteComponent } from "app/componentes/clientes/pedidos-cliente/pedidos-cliente.component";
import { DatosUsuarioComponent } from "app/componentes/clientes/datos-usuario/datos-usuario.component";
import { ListadoClientesComponent } from "app/componentes/admin/listado-clientes/listado-clientes.component";
import { ListadoPedidosComponent } from "app/componentes/admin/listado-pedidos/listado-pedidos.component";
import { CarritoComponent } from "app/componentes/clientes/carrito/carrito.component";
import { GestionLibrosComponent } from "app/componentes/admin/gestion-libros/gestion-libros.component";


const appRoutes : Routes = [
    {
        //pantalla login
        path : 'login',
        component : LoginComponent
    },
    {
        //pantalla registro de clientes
        path : 'registro',
        component : RegistroComponent
    },
    {
        //pantalla error
        path : 'error',
        component : ErrorComponent
    },
    {
        //Pantalla listado libros -> CLIENTES - INICIAL
        path : 'listadolibros',
        component : ListadoLibrosComponent
    },
    {
        //Pantalla alta libors -> ADMINISTRADOR - INICIAL
        path : 'administrador',
        component : AltaLibrosComponent
    },
    {
        //pantalla pedidos -> CLIENTES - MIS PEDIDOS
        path : 'mispedidos',
        component : PedidosClienteComponent
    },
    {
        //Pantalla mis datos de usuario -> CLIENES - MIS DATOS
        path : 'misdatos',
        component : DatosUsuarioComponent
    },
    {
        //Pantalla listado de los clientes de la aplicacion -> ADMIN - LISTADO CLIENTES
        path: 'listadoclientes',
        component : ListadoClientesComponent
    },
    {
        path : 'listadopedidos',
        component : ListadoPedidosComponent
    },
    {
        path: 'carrito',
        component : CarritoComponent
    },
    {
        path: 'gestion',
        component : GestionLibrosComponent
    },
    {
        path : '',
        redirectTo : 'login',
        pathMatch : 'full'
    }
];

export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);