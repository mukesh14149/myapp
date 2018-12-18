import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {
  private dbPath = '/Core-JAVA';
  private uuid;
  constructor(public http: HttpClient,private db: AngularFireDatabase, private uniqueDeviceID: UniqueDeviceID) {
    this.uniqueDeviceID.get()
    .then((uuid: any) => this.uuid = uuid)
    .catch((error: any) => console.log(error));
  }
  
  updateDatabase(res){
   

    // console.log("aksdjfkds");
    // console.log(res[0].id);
    // const database =  this.db.list(this.dbPath);
    // let randomid = "bd7e253e-b3c5-406a-a1fd-35cfb6a4ee94";
    // for(var item in res){
    //    database.update(res[item].id, {id:''});
    // }
   // database.push("1185858b9a-6e03-435c-a3dc-c8cfbbee9e84");
    // database.update(res[0].id, { randomid });
    //this.db.list(this.dbPath + "/"+res[0].id).push(randomid);
    // this.db.list(this.dbPath).push({
    //   id:1,
    //   readby:["1","2"]
    // });
    // database.valueChanges().subscribe((datas) => { 
    //   console.log("datas", datas)
    // },(err)=>{
    //    console.log("probleme : ", err)
    // });
    // this.db.list(this.dbPath, ref => ref)
    // database.snapshotChanges().subscribe(exercices => {
    //   console.log(exercices);
    // });
  //   database.snapshotChanges()
  //   .pipe(map(items => {            // <== new way of chaining
  //     return items.map(a => {
  //       const data = a.payload.val();
  //       const key = a.payload.key;
  //       return {key, data};           // or {key, ...data} in case data is Obj
  //     });
  //   }),
      
  // ).subscribe(res=> console.log(res));
    //database.update(res[i], { url: 'javasampleapp.com' });
  }
  getVisiblityCount(res){
    const database =  this.db.list(this.dbPath+"/" + res.id);   
    return database.snapshotChanges();
    
  }
  updateVisiblity(res){
    console.log(res.id + "updated");
    const database =  this.db.list(this.dbPath+"/" + res.id);   
   database.update("83fd889a-43a9-9e31-3591-060813724788", {"difficulty" : ''});
  }

  getData(){
    console.log("get request111");
    return this.http.get('https://api.myjson.com/bins/vrtic');
     
  }
}
