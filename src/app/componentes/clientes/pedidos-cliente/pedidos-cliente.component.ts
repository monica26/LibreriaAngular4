import { Component, OnInit } from '@angular/core';
import { Pedidos } from "app/entidades/pedidos";
import { AdminService } from "app/servicios/admin-service/admin.service";
import { ClientesService } from "app/servicios/clientes-service/clientes.service";
import { LineaPedido } from "app/entidades/lineaPedido";
import { Router } from "@angular/router";

@Component({
  selector: 'app-pedidos-cliente',
  templateUrl: './pedidos-cliente.component.html',
  styleUrls: ['./pedidos-cliente.component.css'],
  providers: [ClientesService]
})
export class PedidosClienteComponent implements OnInit {

  public pedidosCliente : Pedidos[];
  public lineasPedidos : LineaPedido[];
  public pedidoSelectedRow : Pedidos;
  public visibleLineas = false;
   constructor(private clientesService : ClientesService, private router : Router) { }

  ngOnInit() {
    let id = localStorage.getItem("id");
    if(id == null){
      this.router.navigate(['login']);
    }else{
       this.cargarPedidosCliente(id);
    }   
  }

  public cargarPedidosCliente(id){
    this.clientesService.pedidosCliente(id).subscribe(
      data=>{this.pedidosCliente = data;},
      error => {console.log("ERROR al cargar los pedidos del cliente");}
    );
  }

  public selectPedido(pedido : Pedidos){
    this.pedidoSelectedRow = pedido;
    this.visibleLineas = true;

    this.clientesService.lineasPedido(pedido.id).subscribe(
      data => {this.lineasPedidos = data;},
      error => {console.log("error al cargar las lineas de pedido");}
    );
  }
}
