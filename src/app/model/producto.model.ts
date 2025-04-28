export interface Producto {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    imagen: string;
    disponiblilidad: boolean;
    cantidad?: number;
}