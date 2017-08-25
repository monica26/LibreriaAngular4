import { Injectable } from '@angular/core';
import { Categorias } from "app/entidades/categorias";
import { Http , Headers} from "@angular/http";
import { Libro } from "app/entidades/libros";
import { Usuarios } from "app/entidades/usuarios";


@Injectable()
export class AdminService {

  private url : String = "http://localhost:8081/";
  constructor(private http:Http) { }

  public selectCategorias(){
    return this.http.get(this.url+"tema").map(respuesta => respuesta.json());
  }

  public altaLibro(libro:Libro){
    let headers:Headers = new Headers( { 'Content-Type':'Application/json' } );
    return this.http.post(this.url+"libro", JSON.stringify(libro), 
              { 'headers':headers }).
                map( data => data.json());
  }

  public altaTema(tema:Categorias){
    let headers:Headers = new Headers({'Content-Type':'Application/json'});
    return this.http.post(this.url+"tema", JSON.stringify(tema),
              {'headers' : headers}).
              map(data => data.json());
  }

  public listarClientes(){
    return this.http.get(this.url+"usuario").map(respuesta => respuesta.json());
  }

  public listarPedidos(){
    return this.http.get(this.url+"pedido").map(respuesta => respuesta.json());
  }

  public listarLibros(){
    return this.http.get(this.url+"libro").map(respuesta => respuesta.json());
  }

  public eliminarLibro(idLibro){
    this.http.delete(this.url+"libro/"+idLibro);
  }

}
