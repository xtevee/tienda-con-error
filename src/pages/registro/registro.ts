import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UsuarioProvider } from '../../providers/usuario/usuario';

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
	myForm: FormGroup;
	usuario: any [] = [];
  constructor(public navCtrl: NavController, 
  			      public navParams: NavParams,
  			      public fbulder: FormBuilder,
              public servUsuario: UsuarioProvider) {
    this.myForm = this.fbulder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      email: ['', [Validators.required]],
      direccion: [''],
      password: ['', [Validators.pattern(/^[a-z0-9_-]{6,18}$/)]],
    });
  }
   saveData(){
   	//console.log(this.myForm.value);
   	this.usuario.push( this.myForm.value);
   	console.log(this.usuario);
   	
   // alert(JSON.stringify(this.myForm.value));
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
