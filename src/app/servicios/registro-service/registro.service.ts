import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { Router } from "@angular/router";
import { Usuarios } from "app/entidades/usuarios";

@Injectable()
export class RegistroService {

  private url : String = "http://localhost:8081/";

  constructor(private http : Http,
              private router : Router){
   }

  public registrar(usuario:Usuarios){
    let headers:Headers = new Headers( { 'Content-Type':'Application/json' } );
    usuario.tipo = 1;
    return this.http.post(this.url+"usuario", JSON.stringify(usuario), 
              { 'headers':headers }).
                map( data => data.json());
  }
}
 