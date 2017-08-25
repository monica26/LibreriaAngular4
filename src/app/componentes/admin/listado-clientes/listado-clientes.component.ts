import { Component, OnInit } from '@angular/core';
import { AdminService } from "app/servicios/admin-service/admin.service";
import { Usuarios } from "app/entidades/usuarios";
import { Router } from "@angular/router";

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css'],
  providers:[AdminService]
})
export class ListadoClientesComponent implements OnInit {

  public listaClientes : Usuarios[];
  
  constructor(private adminService: AdminService, private router : Router){ }

  ngOnInit() {
    let id = localStorage.getItem("id");
    if(id == null){
      this.router.navigate(['login']);
    }
    this.cargarClientes();
    }

  public cargarClientes(){
     this.adminService.listarClientes().subscribe(
      data =>{ this.listaClientes = data;
      this.listaClientes = this.listaClientes.filter((usuario:Usuarios) => usuario.id !=  +localStorage.getItem("id"))
    },
      error => {console.log("no se han cargado las categorias");}
    );
  }

}
