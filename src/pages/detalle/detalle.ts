import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CarritoCompraProvider } from '../../providers/carrito-compra/carrito-compra';

@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',
})
export class DetallePage {
	item;
  cantidad = 1;
  ocultar = true;
  megusta = 0;


  constructor(public navCtrl: NavController, 
  				    public navParams: NavParams,
              public servCarrito: CarritoCompraProvider) {

  	this.item = this.navParams.data.producto;
    //console.log(this.item)
    //this.item = this.navParams.get('producto');
  }

  anadir(item){
    this.cantidad = this.cantidad + 1;
    this.ocultar = true;
  }
  restar(item){
    this.cantidad = this.cantidad - 1;
    if (this.cantidad < 1) {
      this.ocultar = false;
    }
  }
  meGusta(item){
    this.megusta = this.megusta + 1;

  }

	  ionViewDidLoad() {
	    console.log('ionViewDidLoad DetallePage');
	  }

	}
