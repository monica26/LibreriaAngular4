export class Usuarios{

     id : number;
     usuario : string;
     pwd : string;
     nombre : string;
     direccion : string;
     tipo : TipoUsuario;


    constructor(usuario:string, pwd:string, nombre:string, direccion:string, tipo:TipoUsuario ){
        this.usuario = usuario;
        this.pwd = pwd;
        this.nombre = nombre;
        this.direccion = direccion;
        this.tipo = tipo;
    }
    toString(): string{
        return "Nombre: " +  this.nombre + "Usuario: " + this.usuario + "Direccion: " + this.direccion;
    }
}

export type TipoUsuario = 1 | 2;