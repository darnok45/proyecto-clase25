import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Producto } from '../../model/producto.model';
import { CarritoService } from '../../servicios/carrito.service';

@Component({
  selector: 'app-productos',
  standalone:true,
  imports: [CommonModule,RouterModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  Productos : Producto[] = [
    {
      id : 1,
      nombre: 'Hola',
      descripcion:'Mundo',
      precio:29,
      imagen:'https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2212291957.jpg?c=16x9&q=h_833,w_1480,c_fill',
      disponibilidad:true
    }
  ]
  constructor(private carritoService: CarritoService){}

  //Metodo para agregar un producto

  agregar(producto:Producto){
    this.carritoService.agregarAlcarrito(producto)
    alert('Producto agregado al carrito')

  }
}
