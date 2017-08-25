export class Pedidos{
    id : number;
    idUsuario : number;
    fecha : Date;
    numeroLibros : number;
    precioTotal : number;

    constructor(idUsuario: number, fecha : Date, numeroLibros:number, precioTotal:number){
        this.idUsuario = idUsuario;
        this.fecha = fecha;
        this.numeroLibros = numeroLibros;
        this.precioTotal = precioTotal;
    }
}