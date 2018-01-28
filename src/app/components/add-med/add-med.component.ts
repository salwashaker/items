import { Component, OnInit } from '@angular/core';
import{Medication} from '../../Medication';
import {MedServicesService} from '../../serv/med-services.service';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-add-med',
  templateUrl: './add-med.component.html',
  styleUrls: ['./add-med.component.css']
})
export class AddMedComponent implements OnInit {

  med:Medication={
    name:'',
    price:0,
    quan:0,
    date:'',
    Sname:'',
    numC:0.
  }
  constructor(
    public medSer:MedServicesService,
    public router:Router,
    public route:ActivatedRoute,
    public flashMessage:FlashMessagesService
  ) { }

  ngOnInit() {
  }

  mySubmit({value,valid}:{value:Medication,valid:boolean}){
    if(!valid){
      this.flashMessage.show('تأكد من جميع الحقول ',{cssClass:'alert-danger',timeout:6000});
      this.router.navigate(['/add-med']);
    }else{
      this.medSer.addMed(value);  
      this.flashMessage.show(' تم الاضافه بنجاح  ',{cssClass:'alert-success',timeout:6000});      
      this.router.navigate(['/']);
    }
  }
}
