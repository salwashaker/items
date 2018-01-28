import { Component, OnInit } from '@angular/core';
import{Medication} from '../../Medication';
import {MedServicesService} from '../../serv/med-services.service';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-edit-med',
  templateUrl: './edit-med.component.html',
  styleUrls: ['./edit-med.component.css']
})
export class EditMedComponent implements OnInit {
  med:Medication={
    name:'',
    price:0,
    quan:0,
    date:'',
    Sname:'',
    numC:0.
  }
  id:string;
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

  mySubmit({value,valid}:{value:Medication,valid:boolean}){
    if(!valid){
      this.flashMessage.show('تأكد من جميع الحقول ',{cssClass:'alert-danger',timeout:6000});
      this.router.navigate(['/add-orphan']);
    }else{
      this.medSer.updatemeds(this.id,value);  
      this.flashMessage.show(' تم الاضافه بنجاح  ',{cssClass:'alert-success',timeout:6000});      
      this.router.navigate(['/']);
    }
  }
}
