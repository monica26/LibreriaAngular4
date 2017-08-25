import { Component, OnInit } from '@angular/core';
import { Categorias } from "app/entidades/categorias";
import { Libro } from "app/entidades/libros";
import { Router } from "@angular/router";
import { AdminService } from "app/servicios/admin-service/admin.service";

@Component({
  selector: 'app-alta-libros',
  templateUrl: './alta-libros.component.html',
  styleUrls: ['./alta-libros.component.css'],
  providers: [AdminService]
})
export class AltaLibrosComponent implements OnInit {

  private categorias : Categorias[];
  private temaSeleccionado : string;
  private libro  = new Libro("",null,0);
  private idTema;
  private tema = new Categorias("");
  private mensajeLibro: string;
  private mensajeTema : string;
  private mensajeError : string;

  constructor(private adminService:AdminService, private router:Router){
   }   

  ngOnInit() {
    let id = localStorage.getItem("id");
    if(id == null){
      this.router.navigate(['login']);
    }
    this.cargarCategorias();
  }

  public cargarCategorias(){
    this.adminService.selectCategorias().subscribe(
      data=> {this.categorias = data;},
      error => {console.log("no se han podido cargar los temas correctamente");}
    );
  }

  public btnAltaLibro(){

   // this.libro.categoria = this.idTema;  
    console.log(this.idTema);
    this.libro.tema = this.idTema;
    this.adminService.altaLibro(this.libro).subscribe(
      data=>{
        this.libro = data;
        this.mensajeLibro = "El libro ha sido dado de alta correctamente";
        console.log("libro dado de alta correctamente");
      },
      error=>{
        console.log("error al dar de el libro");
        this.mensajeError = "Error al dar de alta el libro";
      }
    );
  }

  public btnAltaTema(){
    this.adminService.altaTema(this.tema).subscribe(
      data=>{
        this.tema = data;
        this.mensajeTema = "El tema ha sido dado de alta correctamente";
        console.log("tema dado de alta correctamente");
        this.cargarCategorias();
      },
      error=>{console.log("eror al dar del alta el tema");}
    );
  }
  
  public btnVolverPulsado(){
    this.router.navigate(['login']);
  }

}
