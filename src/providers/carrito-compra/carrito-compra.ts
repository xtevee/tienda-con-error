import { Injectable } from '@angular/core';
import { AlertController, Platform, ModalController} from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { UsuarioProvider } from '../usuario/usuario';
import { LoginPage } from '../../pages/login/login';
import { ProductosPage } from '../../pages/productos/productos';
/*
  Generated class for the CarritoCompraProvider provider.
..
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CarritoCompraProvider {

	items:any [] = [];
	totaldelcarrito:number = 0;
	cantidadtotal:number = 0;
	productos:any[] = [];
	//items:any = [];
	
  constructor( public alerta: AlertController,
  				public platform: Platform,
  				public storage: Storage,
  				public modalCtrl: ModalController,
  				public us_servivio: UsuarioProvider) {


  	this.cargar_storage();
  	this.actualizar_total();
    console.log('Hello CarritoCompraProvider Provider');
    console.log(this.items);
  }

//pulsando el carrito.


	ver_carrito(){

		let modal:any;

		if (this.us_servivio.token ){
			//mostrar pagina del carrito
			modal = this.modalCtrl.create( 'ProductosPage' );
		}else{
			//mostrar el login
			modal = this.modalCtrl.create( LoginPage );

		}
		modal.present();


		modal.onDidDismiss((abrirCarrito:boolean) =>{
			if (abrirCarrito){
				this.modalCtrl.create('ProductosPage').present();
			}
		})

	}



// //creamos un mecasnismo para añadir el producto al carro
	
	agregar_carrito( item_parametro:any) {

		for( let item of this.items ){
			if ( item.referencia == item_parametro.referencia ){

				this.alerta.create({
					title: "El item existe",
					subTitle: item_parametro.producto + ", ya se encuentra en tu carrito",
					buttons: ["Ok"]
				}).present();
				return
			}
		}
		this.items.push({
			referencia:item_parametro.referencia,
			cantidad: 5,
			producto: item_parametro.producto,
			precio: item_parametro.precio,
			imagen: item_parametro.imagen,
			descripcion: item_parametro.descripcion,
		})
		this.actualizar_total();
		this.guardar_storage();
		console.log(this.items);
			this.alerta.create({
					subTitle: item_parametro.producto +" ha sido añadido al carro",
					buttons: ["Ok"]
				}).present();
	}


	actualizar_total(){
		this.totaldelcarrito = 0;
		for (let item of this.items) {
			this.totaldelcarrito += Number (item.precio);
			console.log(this.totaldelcarrito);
		}
	}

	guardar_storage(){

		if( this.platform.is('cordova')){
			//dispositivo
			this.storage.set('items', this.items);
		}else{
			//ordenador
			localStorage.setItem("items", JSON.stringify( this.items ));
		}
	}

	cargar_storage(){

		let promesa = new Promise ((resolve, reject) =>{

		if( this.platform.is('cordova')){
			//dispositivo

			this.storage.ready()
			.then (()=>{
				this.storage.get("items")
				.then( items => {
					if ( items ){
						this.items = items;
					}
					resolve();
				})
			})
			
		}else{
			//ordenador
			if ( localStorage.getItem("items")){
				this.items = JSON.parse (localStorage.getItem("items"))
			}	
			resolve();
	}
	});
		return promesa;

}/*
// descarga(){
// 	return Promise.resolve(this.items);
// }*/
}
