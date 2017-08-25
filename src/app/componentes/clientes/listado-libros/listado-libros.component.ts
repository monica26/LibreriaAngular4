import { Component, OnInit, Input } from '@angular/core';
import { Usuarios } from "app/entidades/usuarios";
import { Libro } from "app/entidades/libros";
import { Categorias } from "app/entidades/categorias";
import { ClientesService } from "app/servicios/clientes-service/clientes.service";
import { ActivatedRoute, Router } from "@angular/router";
import { LineaPedido } from "app/entidades/lineaPedido";

@Component({
  selector: 'app-listado-libros',
  templateUrl: './listado-libros.component.html',
  styleUrls: ['./listado-libros.component.css'],
  providers: [ClientesService]
})
export class ListadoLibrosComponent implements OnInit {

private usuario : Usuarios;
private librosFiltrados :Libro[];
private categorias;
private listaPedidos : LineaPedido[] =[];
private precioTotal : number = 0;
private visible = false;
private categoriaSeleccionada;
private visibleAddCorrecto =false;

  constructor( private clientesService : ClientesService, private router : Router) {
   }

  ngOnInit() {
    let id = localStorage.getItem("id");
    if(id == null){
      this.router.navigate(['login']);
    }else
    { this.cargarCategorias();}
  }

  public cargarCategorias(){
    this.clientesService.cargarCategorias().subscribe(
      data =>{ this.categorias = data;},
      error => {console.log("no se han cargado las categorias");}
    );
  }

  public selectCategoria(categoria : Categorias){
    this.visible = true;
    this.categoriaSeleccionada = categoria.descripcion.toLocaleUpperCase();
    this.clientesService.selectCategoria(categoria).subscribe(
      data => {this.librosFiltrados = data;},
      error => {console.log("no se han cargado los libros filtrados por categoria");}
    );
  }

  public addLibroCesta(libro :Libro){
    var cestaGuardada = localStorage.getItem("cesta");
    this.precioTotal = +localStorage.getItem("precioTotal");
    console.log("precio total cesta: " +this.precioTotal);

    if(JSON.parse(cestaGuardada) == null){
      console.log("no hay libros en la cesta todavia");
      this.listaPedidos.push(new LineaPedido(0,libro.id,1)); 
      localStorage.setItem("cesta", JSON.stringify(this.listaPedidos));
      console.log(this.listaPedidos.length);
    }else{
      console.log("la cesta ya esta creada");
      let existe = false;
      this.listaPedidos = JSON.parse(cestaGuardada);

      for(let linea of this.listaPedidos){
        if(linea.idLibro == libro.id){
          console.log("ya existe una linea de pedido par ese libro. Añadimos cantidad");
          linea.cantidad = linea.cantidad +1;
          existe = true;
        }
      }

      if(existe == false){
        console.log("es una nueva linea de pedido");
        this.listaPedidos.push(new LineaPedido(3,libro.id,1)); 
      }
       localStorage.setItem("cesta",JSON.stringify(this.listaPedidos));
       console.log(this.listaPedidos.length);
    }
      this.visibleAddCorrecto = true;
       this.precioTotal = this.precioTotal + libro.precio;
       console.log("precio total cesta: " +this.precioTotal);
       localStorage.setItem("precioTotal", this.precioTotal.toString());   

  }

  public cerrarAlert(){
    this.visibleAddCorrecto = false;
  }
}
