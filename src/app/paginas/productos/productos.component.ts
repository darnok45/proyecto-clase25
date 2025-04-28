import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
      nombre: '',
      descripcion:'',
      precio:29,
      imagen:'',
      disponiblilidad:true
    }
  ]
  constructor(private carritoService: CarritoService){}

  //Metodo para agregar un producto

  agregar(producto:Producto){
    this.carritoService.agregarAlcarrito(producto)
    alert('Producto agregado al carrito')

  }
}
