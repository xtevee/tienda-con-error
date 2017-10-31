import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CarritoCompraProvider } from '../../providers/carrito-compra/carrito-compra';

//he intentado injectar estos modulos, ya que daba como solucion en algunos foros
//import { Inject, forwardRef } from '@angular/core';

@Component({
  selector: 'page-productos',
  templateUrl: 'productos.html',
})
export class ProductosPage {
	items:any []=[];
  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
          public servCarrito: CarritoCompraProvider
          /*,
          @Inject (forwardRef(() => CarritoCompraProvider)) CarritoCompraProvider*/){
 

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductosPage');
  }

}
