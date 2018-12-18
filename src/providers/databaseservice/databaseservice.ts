import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the DatabaseserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseserviceProvider {

  constructor(public storage: Storage, public http: HttpClient) {
    console.log('Hello DatabaseserviceProvider Provider');
    
  }

  storeData(items){
    this.storage.set('data1', items);
    
    
  }

}
