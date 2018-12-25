import { Component } from '@angular/core';
import { NavController, ToastController, NavParams, LoadingController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { DatabaseserviceProvider } from '../../providers/databaseservice/databaseservice';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items:any;
  t:number =10;
  button:number = -1;
  visiblityCount: number;
  constructor(public loadingCtrl: LoadingController, public navParams: NavParams, public storage: Storage, public httpprovider: HttpProvider, public database: DatabaseserviceProvider){
    // this.showContent(2);
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();

    console.log(this.navParams);
    this.httpprovider.setPath(this.navParams.get('dbpath'), this.navParams.get('value'))
    this.storage.get(this.navParams.get('title')).then((val) => {
      this.items = val;      
      this.getBasicData();
      loading.dismiss();
    }).catch((err) => {
      httpprovider.getData().subscribe((res)=> 
      { 
        this.items = this.formatData(res);
        console.log(this.items);
        database.storeData(this.navParams.get('title'), this.items);
        // httpprovider.updateDatabase(res);
        this.getBasicData();
        loading.dismiss();
      });
    });
   

   
  }
  
 ionViewDidLeave(){
  console.log("leave");
  this.storage.set(this.navParams.get('title'), this.items);
 }
 
  // async showContent(i){
  //   this.file.readAsText(this.file.applicationDirectory + "www/assets/", "java-core.json").then(res => {
  //         this.items = JSON.parse(res);
  //     });
  
  //   let toast = await this.toastCtrl.create({
  //     message: this.file.dataDirectory,
  //     duration: 3000,
  //     position: 'top'
  //   });
  
  //   await toast.present();
  //   let element = document.getElementsByTagName('table');
  //   element[0].className = 'table';

  //   //this.items[i].visible = !this.items[i].visible;
  // }
  // checkFocus(i){
  //   console.log(i);
  //   this.button = i;
  // }
  getBasicData(){
    for(let i=this.t-10;i<this.t;i++){    
     this.httpprovider.getVisiblityCount(this.items[i]).subscribe(res=> {
       //console.log(res.length +"ss" + this.items[i].visiblityCount );
        this.items[i].visiblityCount = res.length;      
    });
  }
    
  }

  formatData(res){
     for(let item in res){
       //console.log(res[item]);
       res[item]['visiblity'] = false;
       res[item]['visiblityCount'] = 0;
     }
     return res;
  }
  changeVisiblity(i){
    this.items[i].visiblity = !this.items[i].visiblity;
    //console.log(this.items[i].id); 
    setTimeout(() => {  
        try{
          let element = document.getElementsByTagName('table');
          
          
          element[0].className = 'table';
     

        }catch(e){
          console.error("classname not found");
        }
    }, 1000);
    if(this.items[i].visiblity)
        this.httpprovider.updateVisiblity(this.items[i]);
  }
  doInfinite(infiniteScroll) {
   
    if(this.t<=this.items.length-10){
      this.t = this.t +10;
      this.getBasicData();
    }else if(this.t < this.items.length){
      this.t = this.t+ this.items.length-this.t;
      this.getBasicData();
    }
      
    infiniteScroll.complete();
   
  }

}
