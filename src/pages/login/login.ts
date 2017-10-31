import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { RegistroPage } from '../../pages/registro/registro';
import { ProductosPage } from '../../pages/productos/productos';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	correo:string = "";
	contrasena:string= "";


  constructor(public navCtrl: NavController, 
      			  public navParams: NavParams) {

  }
  acceder(correo:string, contrasena:string){
  	if (this.correo == 'admin@admin.es' && this.contrasena == 'admin' ){
  		console.log(this.correo);
      console.log(this.contrasena);
      this.navCtrl.push(ProductosPage);

    //se puede invocar al dismiss desde el controlador, pero lo haremos desde HTML
    //esta funcion cerraria el modal
    //this.viewCtrl.dismiss();
      //this.navCtrl.push(OrdenesPage);

  	}else{
  		console.log('usuario no valido');
  		this.navCtrl.push(RegistroPage);  		
  	}
  }

  }


