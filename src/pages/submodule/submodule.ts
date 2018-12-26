import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SubmodulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-submodule',
  templateUrl: 'submodule.html',
})
export class SubmodulePage {
  items:any = [
    {title:"Java-Collection", value:"https://api.myjson.com/bins/rvjic", dbpath:"/Collection-JAVA"},
    {title:"Java-Core", value:"https://api.myjson.com/bins/vrtic", dbpath:"/Core-JAVA"},
    {title:"Java-EJB", value:"https://api.myjson.com/bins/qqtgk", dbpath:"/EJB-JAVA"},
    {title:"Java-Hibernate", value:"https://api.myjson.com/bins/a2ois", dbpath:"/Hibernate-JAVA"},
    {title:"Java-JDBC", value:"https://api.myjson.com/bins/sj49w", dbpath:"/JDBC-JAVA"},

  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubmodulePage');
  }

  loadSubmodule(i){
    console.log(i);
    
    console.log(this.items[i]);
      this.navCtrl.push("HomePage", this.items[i]);
  }

}
