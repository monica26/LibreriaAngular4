import { Injectable } from '@angular/core';
import { Usuarios } from "app/entidades/usuarios";
import { Http } from "@angular/http";
//En Angular 2 se utilizan librerÃ­as de terceros para las
//comunicaciones asÃ­ncronas con el servidor
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class LoginService {

 private url:String = "http://localhost:8081/";
  constructor(private http:Http) { }

  public loginUsuario(usuario: string, pwd : string){
      return this.http.get(this.url+"usuario/"+usuario+"/pwd/"+pwd)
      .map( respuesta => respuesta.json() );
    }

  } 


