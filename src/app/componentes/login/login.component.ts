import { Component, OnInit } from '@angular/core';
import { Usuarios } from "app/entidades/usuarios";
import { LoginService } from "app/servicios/login-service/login.service";
import { Router } from "@angular/router";
import { AppComponent } from "app/app.component";
import { Http } from "@angular/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  public usuario : Usuarios;
  public mensaje :String;

  constructor(private servicioLogin : LoginService, private router : Router) { 
    //definimos un objeto usuario vacio (es necesario)
    this.usuario = new Usuarios("","","","",1);
    localStorage.clear();
  }

  ngOnInit() { 
  }

  public btnLogin():void{ 
    let that = this;
    this.servicioLogin.loginUsuario(this.usuario.usuario, this.usuario.pwd).subscribe( 
      data => {
        this.usuario = data;
        let id = this.usuario.id;
        //guargamos en localStorage el id del usuario que se acaba de registrar 
        localStorage.setItem("id", id.toString());

        if(this.usuario.tipo == 1){
          this.router.navigate(['listadolibros']);
        }else{
          this.router.navigate(['administrador']);
        }

      },
      error =>{
        this.mensaje="Usuario o Constraseña incorrectos";
      }
    );
  }
    

}
