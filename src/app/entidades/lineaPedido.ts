export class LineaPedido{
    public id : number;
    public idPedido : number;
    public idLibro : number;
    public cantidad : number;
     
    
    constructor(idPedido: number, idLibro : number, cantidad : number){
        this.idPedido = idPedido;
        this.idLibro = idLibro;
        this.cantidad = cantidad;
    }
};