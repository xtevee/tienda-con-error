import { Injectable } from '@angular/core';
import { AlertController, Platform} from 'ionic-angular';

import { Storage } from '@ionic/storage';
//import { UsuarioPage } from '../../pages/usuario/usuario';
//import { LoginPage } from '../../pages/login/login';
//import { RegistroPage } from '../../pages/registro/registro';

@Injectable()
export class UsuarioProvider {

	token:string;
	id_usuario:string;

	usuarios:any []=[];

  constructor(public alerta: AlertController,
  			  public platform: Platform,
  			  public storage: Storage) {
    console.log('Hello UsuarioProvider Provider');

  }/*
	saveData( item_parametro:any) {

		for( let item of this.usuarios ){
			if ( item.token == item_parametro.token){

				this.alerta.create({
					title: "USUARIO",
					subTitle: item_parametro.email + ", esta registrado",
					buttons: ["Ok"]
				}).present();
				return
			}
		}
		this.usuarios.push(item_parametro)

		this.guardar_storage();
		console.log(this.usuarios);
			this.alerta.create({
					subTitle: item_parametro.email +" ha sido registrado",
					buttons: ["Ok"]
				}).present();
	}

  	guardar_storage(){

		if( this.platform.is('cordova')){
			//dispositivo
			this.storage.set('usuarios', this.usuarios);
		}else{
			//ordenador
			localStorage.setItem("usuarios", JSON.stringify( this.usuarios));
		}

	}
*/
}
