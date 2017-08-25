import { Component, OnInit } from '@angular/core';
import { Categorias } from "app/entidades/categorias";
import { Libro } from "app/entidades/libros";
import { AdminService } from "app/servicios/admin-service/admin.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-gestion-libros',
  templateUrl: './gestion-libros.component.html',
  styleUrls: ['./gestion-libros.component.css'],
  providers : [AdminService]
})
export class GestionLibrosComponent implements OnInit {

  public listaCategorias : Categorias[];
  public listaLibros : Libro[];

  constructor(private adminService : AdminService, private router : Router) { }

  ngOnInit(){
     let id = localStorage.getItem("id");
    if(id == null){
      this.router.navigate(['login']);
    }
    this.cargarCategorias();
    this.listarLibros();
  }
  
  public cargarCategorias(){
    this.adminService.selectCategorias()
      .subscribe(data =>{this.listaCategorias = data;},
      error=>{console.log("No se han podido cargar las categorias.");});
  }

  public listarLibros(){
    this.adminService.listarLibros()
    .subscribe(data=>{this.listaLibros = data;},
    error=>{console.log("No se han podido cargar los libros.");});
  }

  public eliminarLibro(idLibro){
    console.log("eliminar libro:" +idLibro);
    this.adminService.eliminarLibro(idLibro);
    this.cargarCategorias();
    this.listarLibros();
  }

}
