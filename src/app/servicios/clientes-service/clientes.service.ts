import { Injectable } from '@angular/core';
import { Usuarios } from "app/entidades/usuarios";
import { Libro } from "app/entidades/libros";
import { Categorias } from "app/entidades/categorias";
import { Http, Headers } from "@angular/http";

//En Angular 2 se utilizan librerÃ­as de terceros para las
//comunicaciones asÃ­ncronas con el servidor
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Pedidos } from "app/entidades/pedidos";
import { LineaPedido } from "app/entidades/lineaPedido";

@Injectable()
export class ClientesService {
  public usuario : Usuarios;
  private url:String = "http://localhost:8081/";
  
  constructor(private http:Http) {    
  }

public cargarCategorias(){
   return this.http.get(this.url+"tema")
      .map( respuesta => respuesta.json() );
}

public selectCategoria(categoria : Categorias){
  return this.http.get(this.url+"libro/listar/"+categoria.id)
  .map(respuesta => respuesta.json());
}

public cargarDatosUsuario(id){
  return this.http.get(this.url+"usuario/"+id)
  .map(respuesta => respuesta.json());
}

public pedidosCliente(id){
  return this.http.get(this.url+"/pedido/cliente/"+id)
  .map(respuesta => respuesta.json());
}

public lineasPedido(idPedido){
  return this.http.get(this.url+"/linea/"+idPedido)
  .map(respuesta => respuesta.json());
}

public modificarDatosCliente(usuario : Usuarios){
   let headers:Headers = new Headers( { 'Content-Type':'Application/json' } );
    return this.http.post(this.url+"usuario", JSON.stringify(usuario), 
              { 'headers':headers }).
                map( data => data.json());
}

public altaPedido(pedido:Pedidos){
  let headers:Headers = new Headers({'Content-Type':'Application/json'});
  return this.http.post(this.url+"pedido", JSON.stringify(pedido),
      {'headers':headers}).
        map(data => data.json());
}

public altaLineaPedido(linea: LineaPedido){
  let headers : Headers = new Headers({'Content-Type':'Application/json'});
  return this.http.post(this.url+"linea", JSON.stringify(linea),
      {'headers': headers}).
      map(data => data.json());
}

public buscarLibro(idLibro){
  return this.http.get(this.url+"libro/"+idLibro)
  .map(respuesta => respuesta.json());
}


}
