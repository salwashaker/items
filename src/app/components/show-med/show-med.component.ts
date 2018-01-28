import { Component, OnInit } from '@angular/core';
import{Medication} from '../../Medication';
import {MedServicesService} from '../../serv/med-services.service';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-show-med',
  templateUrl: './show-med.component.html',
  styleUrls: ['./show-med.component.css']
})
export class ShowMedComponent implements OnInit {

  id :string;
  meds:Medication[];

  constructor(
    public medSer:MedServicesService,
    public router:Router,
    public route:ActivatedRoute,
    public flashMessage:FlashMessagesService
  ) { 
    this.medSer.getmed().subscribe(
      meds=>{this.meds =meds
     
      });
  }

  ngOnInit() {
  }
 //delete
 Delete(id){
  if(confirm('هل انت متأكد ؟')== true){
    this.medSer.deteteMed(id);
    this.flashMessage.show(' تم المسح بنجاح  ',{cssClass:'alert-success',timeout:6000});      
    this.router.navigate(['/']);      
  }
}
}
