import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DetallePage } from '../pages/detalle/detalle';
import { ProductosPage } from '../pages/productos/productos';
import { LoginPage } from '../pages/login/login';
import { RegistroPage } from '../pages/registro/registro';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CarritoCompraProvider } from '../providers/carrito-compra/carrito-compra';
import { ProductosProvider } from '../providers/productos/productos';
import { UsuarioProvider} from '../providers/usuario/usuario';


import { IonicStorageModule } from '@ionic/storage';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DetallePage,
    LoginPage,
    RegistroPage,
    ProductosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DetallePage,
    LoginPage,
    RegistroPage,
    ProductosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CarritoCompraProvider,
    ProductosProvider,
    UsuarioProvider
  ]
})
export class AppModule {}
