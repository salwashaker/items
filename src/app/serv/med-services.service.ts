import { Injectable } from '@angular/core';
import {AngularFireDatabase,FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database-deprecated';
import * as firebase from 'firebase';
import {AngularFireAuth} from 'angularfire2/auth';
import 'rxjs/add/operator/map';
import { Medication } from '../Medication';

@Injectable()
export class MedServicesService {


  medList:FirebaseListObservable<any[]>;
  medObj:FirebaseObjectObservable<any>;
  folder:any;

  constructor(public af:AngularFireDatabase, public afAuth:AngularFireAuth) { 
    this.folder = 'medsPhoto';
    this.medList = this.af.list('/medications') as FirebaseListObservable<Medication[]>;
  }

  getmed(){
    return this.medList;
  }

  addMed(meds:Medication){
    return this.medList.push(meds);
   
    
  }
  
  getmeds(id:string){
    this.medObj = this.af.object('/medications/'+id) as FirebaseObjectObservable<Medication>;
    return this.medObj;
  }

  updatemeds(id:string,meds:Medication){
    return this.medList.update(id,meds);
  }


  deteteMed(id:string){
    return this.medList.remove(id);
    }


  login(email:string,password:string){
    return new Promise((resolve,reject)=>{
      this.afAuth.auth.signInWithEmailAndPassword(email,password).then(userData=>
        resolve(userData),err=>reject(err)
      )
    });
  }

  logout(){
    this.afAuth.auth.signOut();
  }

  getAuth(){
    return this.afAuth.authState.map(auth=>auth);
  }

}

