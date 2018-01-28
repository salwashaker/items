import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database-deprecated';
import {MedServicesService} from './serv/med-services.service';
import {FlashMessagesModule, FlashMessagesService} from 'angular2-flash-messages';
import {AngularFireAuth} from 'angularfire2/auth';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AddMedComponent } from './components/add-med/add-med.component';
import { EditMedComponent } from './components/edit-med/edit-med.component';
import { ShowMedComponent } from './components/show-med/show-med.component';
import { MoreMedComponent } from './components/more-med/more-med.component';


const appRoute:Routes=[
  {path:'' , component:ShowMedComponent},
  {path:'add-med' ,component:AddMedComponent},
  {path:'edit-med/:id', component:EditMedComponent},
  {path:'more-med/:id' , component:MoreMedComponent},
  {path:'login',component:LoginComponent}
];

const config =  {
  apiKey: "AIzaSyCfTzVr5UjfBYlHiR61oan74EIyCITF1cQ",
    authDomain: "persons-589c1.firebaseapp.com",
    databaseURL: "https://persons-589c1.firebaseio.com",
    projectId: "persons-589c1",
    storageBucket: "persons-589c1.appspot.com",
    messagingSenderId: "248642539933"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddMedComponent,
    EditMedComponent,
    ShowMedComponent,
    MoreMedComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    FlashMessagesModule
    
  ],
  providers: [MedServicesService,FlashMessagesService,AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
