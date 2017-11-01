import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CarritoCompraProvider } from '../../providers/carrito-compra/carrito-compra';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public _cs: CarritoCompraProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
