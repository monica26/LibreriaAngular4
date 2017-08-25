import { Component, OnInit } from '@angular/core';
import { ClientesService } from "app/servicios/clientes-service/clientes.service";
import { Usuarios } from "app/entidades/usuarios";
import { Router } from "@angular/router";

@Component({
  selector: 'app-datos-usuario',
  templateUrl: './datos-usuario.component.html',
  styleUrls: ['./datos-usuario.component.css'],
  providers:[ClientesService]
})
export class DatosUsuarioComponent implements OnInit {
  public mensaje : string;
  public usuario : Usuarios;
  constructor(private clientesService : ClientesService, private router : Router) {
    this.usuario = new Usuarios("","","","",1);
   }

  ngOnInit() {
    let id = +localStorage.getItem("id");
    if(id == null){
      this.router.navigate(['login']);
    }else{
       this.cargarDatosUsuario(id);
    }
    
   

  }

  public cargarDatosUsuario(id){
    this.clientesService.cargarDatosUsuario(id).subscribe(
      data => {this.usuario = data;
      console.log(this.usuario.nombre)},
      error => {console.log("error al cargar los datos del usuario");}
    );
    
  }


  public btnModificarPulsado(usuario){
    this.clientesService.modificarDatosCliente(usuario).subscribe(
      data => {this.usuario = data;
        this.mensaje = "Se han modificado los datos correctamente";
    },
      error => {console.log("error al modificar los datos del cliente");}
    );
  }
}
