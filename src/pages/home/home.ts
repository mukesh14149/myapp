import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items:any;
  t:number =10;
  button:number = -1;
  visiblityCount: number;
  constructor(public httpprovider: HttpProvider){
    // this.showContent(2);
   
    httpprovider.getData().subscribe((res)=> 
      { 
        console.log(res[0].question);
        this.items = this.addVisiblity(res);
       // httpprovider.updateDatabase(res);
        this.getBasicData();
      });

   
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
    for(let i=this.t-10;i<=this.t;i++){
     this.httpprovider.getVisiblityCount(this.items[i]).subscribe(res=> {
       //console.log(res.length +"ss" + this.items[i].visiblityCount );
        this.items[i].visiblityCount = res.length;      
    });
  }
    
  }

  addVisiblity(res){
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
          console.log("aaa");
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
    }
      
    infiniteScroll.complete();
   
  }

}
