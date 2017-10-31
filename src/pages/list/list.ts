import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetallePage } from '../detalle/detalle';
import { CarritoCompraProvider } from '../../providers/carrito-compra/carrito-compra';
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  productos: any;
  precio: any;
   constructor(public navCtrl: NavController, 
                public navParams: NavParams,
                public servCarrito: CarritoCompraProvider) {

      this.productos = [

      {referencia: 'T34', cantidad: 1, producto: 'URBANFUN', precio: 34.65 , imagen: '../../assets/productos/tecnologia/URBANFUN.jpg', descripcion: "esta es la descripcion 1"},
      {referencia: 'T56', cantidad: 1, producto: 'INSOMNIA-CRANEAL', precio: 129.35 , imagen: '../../assets/productos/tecnologia/insomnia-relief-Craneal.jpg',descripcion: "esta es la descripcion 2"},
      {referencia: 'V09', cantidad: 1, producto: 'TOILETRY-BAG-ORGANIZER', precio: 15.25 , imagen: '../../assets/productos/tecnologia/Toiletry-Bag-Organizer.jpg', descripcion: "esta es la descripcion 3"},
      {referencia: 'V78', cantidad: 1, producto: 'SUITCASE-ELASTIC-LUGGAGE', precio: 20.00 ,imagen: '../../assets/productos/tecnologia/Suitcase-Elastic-Luggage.jpg', descripcion: "esta es la descripcion 4"},
      {referencia: 'O88', cantidad: 1, producto: 'ORIGIANL-HK-WATCH', precio: 125.00, imagen: '../../assets/productos/tecnologia/Origianl-HK-Watch.jpg', descripcion: "esta es la descripcion 5"},
      {referencia: 'O90', cantidad: 1, producto: 'CASUAL-BOOTS', precio: 62.55, imagen: '../../assets/productos/tecnologia/Casual-Boots.jpg', descripcion: "esta es la descripcion 6"},
      {referencia: 'T90', cantidad: 1, producto: 'EXTERNAL-BATTERY-CHARGER', precio:25.45 , imagen: '../../assets/productos/tecnologia/External-Battery-Charger.jpg', descripcion: "esta es la descripcion 7"}
    ];
  }

  detallePagina(item){
    this.navCtrl.push(DetallePage, {producto: item});
  }

}
