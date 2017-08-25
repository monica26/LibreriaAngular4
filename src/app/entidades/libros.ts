export class Libro{
     id : number;
     descripcion : string;
     precio : number;
     tema : number;

    constructor( descripcion:string, precio:number, tema : number){
        //this.id = id;
        this.descripcion = descripcion;
        this.precio = precio;
        this.tema = tema;
    }

}