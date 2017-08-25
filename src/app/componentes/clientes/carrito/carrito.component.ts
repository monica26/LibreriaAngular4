import { Component, OnInit } from '@angular/core';
import { LineaPedido } from "app/entidades/lineaPedido";
import { Libro } from "app/entidades/libros";
import { Router } from "@angular/router";
import { ClientesService } from "app/servicios/clientes-service/clientes.service";
import { Pedidos } from "app/entidades/pedidos";

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
  providers: [ClientesService]
})
export class CarritoComponent implements OnInit {

  public lineasPedidos: LineaPedido[];
  public pedido : Pedidos;
  public lineaPedidoAlta : LineaPedido;
  public mensajePedido : string;
  public mensajeVacio : string;
  public visible = true;
  public visiblePedidoCorrecto = false;
  public libro : Libro;

  constructor(private route : Router, private  clientesService : ClientesService ){ }

  ngOnInit(){
    let id = localStorage.getItem("id");
    if(id == null){
      this.route.navigate(['login']);
    }
    this.lineasPedidos = JSON.parse(localStorage.getItem("cesta"));
    if(this.lineasPedidos == null || this.lineasPedidos.length == 0){
      this.mensajeVacio = "No hay productos en el carrito";
       this.visible = false;
    }
  }


  // -----------------BOTONES------------
  public realizarPedido(){
     if(this.lineasPedidos == null || this.lineasPedidos.length == 0){
      this.mensajeVacio = "No hay productos en el carrito";
       this.visible = false;
    }else{
      this.altaPedido();
      this.vaciarCarrito();
      this.visiblePedidoCorrecto = true;
    }
  }

  public vaciarCarrito(){
    if(this.lineasPedidos.length > 0){
      this.visible = false;
      localStorage.removeItem("cesta");
      localStorage.removeItem("precioTotal");
      this.mensajeVacio = "No hay productos en el carrito";
    }    
  }


  public eliminarLinea(linea){
    //buscamos el libro corresponde a esa linea
    //restamos precio al precio total
   
    this.lineasPedidos = this.lineasPedidos.filter(obj => obj != linea);
    localStorage.setItem("cesta", JSON.stringify(this.lineasPedidos));
    this.lineasPedidos = JSON.parse(localStorage.getItem("cesta"));
    
    if(this.lineasPedidos.length == 0){
      this.mensajeVacio = "No hay productos en el carrito";
      this.visible = false;
    }     
     this.clientesService.buscarLibro(linea.idLibro).subscribe(
      data => {
                this.libro = data;
                let precioTotal = JSON.parse(localStorage.getItem("precioTotal"));
                precioTotal = precioTotal - (this.libro.precio*linea.cantidad);
                localStorage.setItem("precioTotal", precioTotal);
              },
      error =>{console.log("Error en la busqueda de libro por id");}
      );

   

  }

  //-------------------------------------------------------------------------------

  public altaPedido(){
     this.pedido = new Pedidos(+localStorage.getItem("id"), new Date(), this.lineasPedidos.length,+localStorage.getItem("precioTotal"));

    //damos de alta el pedido
    this.clientesService.altaPedido(this.pedido).subscribe(
      data => {
              this.pedido = data;
              console.log("pedido dado de alta correctamente");
              console.log("id del pedido : " + this.pedido.id);
              this.altaLineasPedido();
            },
      error => {console.log("error al dar de alta el pedido");}
    );
  } 

  public altaLineasPedido(){
     //damos de alta las lineas de pedido
     console.log("id del pedido" + this.pedido.id);
    for(let linea of this.lineasPedidos){
      linea.idPedido = this.pedido.id;
      this.clientesService.altaLineaPedido(linea).subscribe(
        data => {
                this.lineaPedidoAlta = data;
                console.log("linea pedido dada de alta");  
              },
        error => {console.log("error al dar de alta la linea de pedido");}
      );
    }
  }

}
