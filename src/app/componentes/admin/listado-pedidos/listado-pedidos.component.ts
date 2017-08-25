import { Component, OnInit } from '@angular/core';
import { Pedidos } from "app/entidades/pedidos";
import { AdminService } from "app/servicios/admin-service/admin.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-listado-pedidos',
  templateUrl: './listado-pedidos.component.html',
  styleUrls: ['./listado-pedidos.component.css'],
  providers: [AdminService]
})
export class ListadoPedidosComponent implements OnInit {

private listaPedidos : Pedidos[];

  constructor(private adminService: AdminService, private router:Router) { }

  ngOnInit() {
     let id = localStorage.getItem("id");
      if(id == null){
        this.router.navigate(['login']);
      }else{
        this.listarPedidos();
      }
  }

  public listarPedidos(){
    this.adminService.listarPedidos().subscribe(
      data => {this.listaPedidos = data;},
      error => {console.log("no se han podido cargar los pedidos")}
    );
  }
 
}
