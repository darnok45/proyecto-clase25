import { Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { ProductosComponent } from './paginas/productos/productos.component';
import { CarritoComponent } from './paginas/carrito/carrito.component';
import { QuienessomosComponent } from './paginas/quienessomos/quienessomos.component';
import { OfertasComponent } from './paginas/ofertas/ofertas.component';

export const routes: Routes = [
    {path: '', redirectTo:'/inicio', pathMatch:'full'},

    {path:'inicio',component:HomeComponent},

    {path:'Contacto',component:ContactoComponent},

    {path: 'producto',component:ProductosComponent},

    {path: 'carrito',component:CarritoComponent},

    {path: 'quienes-somos',component:QuienessomosComponent},

    {path:'ofertas',component:OfertasComponent}
];
