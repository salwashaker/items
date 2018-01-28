import { Component, OnInit } from '@angular/core';
import{Medication} from '../../Medication';
import {MedServicesService} from '../../serv/med-services.service';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import * as firebase from 'firebase';



@Component({
  selector: 'app-more-med',
  templateUrl: './more-med.component.html',
  styleUrls: ['./more-med.component.css']
})
export class MoreMedComponent implements OnInit {

  id:string;
  med:Medication;
  
  constructor(
    public medSer:MedServicesService,
    public router:Router,
    public route:ActivatedRoute,
    public flashMessage:FlashMessagesService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.medSer.getmeds(this.id).subscribe(med =>{
      this.med = med;
 
    });
  }
  //delete
  Delete(id){
   this.medSer.deteteMed(id);
   this.router.navigate(['/']);
 }
 }