import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpProvider } from '../providers/http/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { ModulesPage } from '../pages/modules/modules';
import { IonicStorageModule } from '@ionic/storage';
import { DatabaseserviceProvider } from '../providers/databaseservice/databaseservice';

export const config = {
  apiKey: "AIzaSyB1L8hnzF5BizgW_rc_RpOya-mbaaD51Wc",
  authDomain: "example-e5c46.firebaseapp.com",
  databaseURL: "https://example-e5c46.firebaseio.com",
  projectId: "example-e5c46",
  storageBucket: "example-e5c46.appspot.com",
  messagingSenderId: "194914211667"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ModulesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ModulesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpProvider,
    DatabaseserviceProvider,
    UniqueDeviceID
  ]
})
export class AppModule {}
