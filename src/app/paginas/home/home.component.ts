import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { Producto } from '../../model/producto.model';
import { CarritoService } from '../../servicios/carrito.service';
import { FavoritoService } from '../../servicios/favoritos.service';


@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

 Productos: Producto[] = [
    {
      id: 1,
      nombre: 'hola',
      descripcion: 'hello',
      precio: 2000,
      cantidad: 100,
      imagen: 'https://th.bing.com/th/id/OIP.6goabW5o89_iyHCv77QXkAHaHa?rs=1&pid=ImgDetMain',
      disponibilidad: true,
      categoria: "",
      marca:""

    },

    {
      id: 2,
      nombre: 'hola',
      descripcion: 'hello',
      precio: 1000,
      cantidad: 200,
      imagen: 'https://th.bing.com/th/id/OIP.DBrRWq3-a7S17lkgiiZfiAHaIH?rs=1&pid=ImgDetMain',
      disponibilidad: true,
      categoria: "",
      marca:""
    },
    {
      id: 3,
      nombre: 'hola',
      descripcion: 'hello',
      precio: 1000,
      cantidad: 190,
      imagen: 'https://i.picasion.com/pic92/f0a9ce9f0827294a6418c5274f108434.gif',
      disponibilidad: true,
     categoria: "",
      marca:""
    },


    {
      id: 5,
      nombre: 'hola',
      descripcion: 'hello',
      precio: 1000,
      cantidad: 300,
      imagen: 'https://ucarecdn.com/e72f22d1-f9c1-456a-a9f5-7960d7c3cd59/e4836c69d63152a84dc49941e2c3a6e52dfb802a.gif',
      disponibilidad: true,
     categoria: "",
      marca:""
    },

    {
      id: 6,
      nombre: 'hola',
      descripcion: 'hello',
      precio: 1000,
      cantidad: 198,
      imagen: 'https://images-na.ssl-images-amazon.com/images/I/61TbnB5doXL._AC_SL1500_.jpg',
      disponibilidad: true,
     categoria: "",
      marca:""
    },
    {
      id: 7,
      nombre: 'hola',
      descripcion: 'hello',
      precio: 1000,
      cantidad: 50,
      imagen: 'https://th.bing.com/th/id/R.ba8f94435a13e277bed7aa9e78ccbc10?rik=eUdj7irORIoI2g&pid=ImgRaw&r=0',
      disponibilidad: true,
    categoria: "",
      marca:""

    },
    {
      id: 8,
      nombre: 'hola',
      descripcion: 'hello',
      precio: 1000,
      cantidad: 20,
      imagen: 'https://th.bing.com/th/id/OIP.OEaoiLYcpLVf-C4KZDThawHaDt?w=882&h=441&rs=1&pid=ImgDetMain',
      disponibilidad: true,
     categoria: "",
      marca:""
    },
    {
      id: 9,
      nombre: 'hola',
      descripcion: 'hello',
      precio: 1000,
      cantidad: 400,
      imagen: 'https://th.bing.com/th/id/OIP._Vh_YycKTtpNXc0NJvbkagHaDt?rs=1&pid=ImgDetMain',
      disponibilidad: true,
      categoria: "",
      marca:""

    },
    {
      id: 10,
      nombre: 'hola',
      descripcion: 'hello',
      precio: 1000,
      cantidad: 80,
      imagen: 'https://3.bp.blogspot.com/-gzWTz588kLg/WbLDU2h_ASI/AAAAAAAAAME/wnIojKg2GikmhNc-NPsaxjeb4O-Z18ruwCK4BGAYYCw/s1600/gif.gif',
      disponibilidad: true,
      categoria: "",
      marca:""
    },
    {
      id: 11,
      nombre: 'hola',
      descripcion: 'hello',
      precio: 1000,
      cantidad: 100,
      imagen: 'https://th.bing.com/th/id/R.b6d2c1be853ff9cc56b29dfd513db8a5?rik=XNWHcHjPM9vSKQ&pid=ImgRaw&r=0',
      disponibilidad: true,
      categoria: "",
      marca:""
    },
    {
      id: 12,
      nombre: 'hola',
      descripcion: 'hello',
      precio: 1000,
      cantidad: 23,
      imagen: 'https://coolboxpe.vtexassets.com/arquivos/ids/359570/image-8befa61bbb0847df9fb9987331105d10.jpg?v=638488111251730000',
      disponibilidad: true,
      categoria: "",
      marca:""
    },

    {
      id: 13,
      nombre: 'hola',
      descripcion: 'hello',
      precio: 900,
      cantidad: 73,
      imagen: 'https://tse3.mm.bing.net/th/id/OIP.jR4BmcXr5Pqz5f7iiqDb2gHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
      disponibilidad: true,
      categoria: "",
      marca:""

    },
  ]

  constructor(private carritoService: CarritoService, private favoritoService: FavoritoService) { }
  
  agregar(producto: Producto) {
    this.carritoService.agregarAlcarrito(producto)
    alert('producto agregado al carrito') 
  }


  agregarAfavorito(producto: Producto) {
    this.favoritoService.agregarAFavoritos(producto)
    alert('producto agregado a favorito')
  }


  searchTerm: string ='';

  selectedCategory: string ='';
  selectedBrand: string ='';
  minprecio: number | null = null;
  maxprecio:number | null = null;

  get categories(): string[]{
    return [...new Set(this.Productos.map(p=>p.categoria))]
  }
  get marca(): string[]{
    return[...new Set(this.Productos.map(p=>p.marca))]
  }

  onSearch(event:Event):void{
    event.preventDefault();
  }

  resetFilters():void{
    this.searchTerm = '';
    this.selectedCategory = '';
    this.selectedBrand = '';
    this.minprecio = null;
    this.maxprecio = null;
  }

  get filteredProducts():Producto[]{
    return this.Productos.filter(p => 
    (this.searchTerm === '' || p.nombre.toLowerCase().includes(this.searchTerm.toLowerCase())) &&
    (this.selectedCategory === '' || p.categoria === this.selectedCategory) &&
    (this.selectedBrand === '' || p.marca === this.selectedBrand) &&
    (this.minprecio === null || p.precio>=this.minprecio ) &&
    (this.maxprecio === null || p.precio <= this.maxprecio)
    )
  }
}