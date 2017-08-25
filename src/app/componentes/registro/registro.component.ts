import { Component, OnInit } from '@angular/core';
import { RegistroService } from "app/servicios/registro-service/registro.service";
import { Router } from "@angular/router";
//Insertar objetos de la libreria http
import { Http, Headers, Response } from "@angular/http";
import { Usuarios } from "app/entidades/usuarios";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers :[RegistroService]
})
export class RegistroComponent implements OnInit {

  public usuario : Usuarios;
  public mensaje : string;

  constructor(private registroService : RegistroService, private router : Router){
    this.usuario = new Usuarios("","","","",1);
  }

  ngOnInit(){
  }

  public btnInsertarPulsado(){
    if(this.usuario.direccion.length == 0 || this.usuario.nombre.length == 0 || this.usuario.pwd.length == 0 || this.usuario.usuario.length == 0){
      this.mensaje = "Alguno de los campos esta vacio";
    }
    else{
    this.registroService.registrar(this.usuario).subscribe(
      data=>{
        this.usuario = data;
        localStorage.setItem("id", this.usuario.id.toString());
        this.router.navigate(['listadolibros']);
      },
      error=>{console.log("error al dar de alta el usuario");}
    );
  }
  }

 public btnVolverPulsado(){
   this.router.navigate(['login']); 
 }

 
}
