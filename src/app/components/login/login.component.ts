import { Component, OnInit } from '@angular/core';
import{Medication} from '../../Medication';
import {MedServicesService} from '../../serv/med-services.service';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  email:string;
  password:string;

  constructor(
    public medSer:MedServicesService,
    public router:Router,
    public flashMessage:FlashMessagesService) { }

  ngOnInit() {
  }

  Login(){
  this.medSer.login(this.email,this.password).then((res)=>{
    this.flashMessage.show(' تم التعديل بنجاح  ',{cssClass:'alert-success',timeout:6000});            
    this.router.navigate(['/']);    
  }).catch((err)=>{
    this.flashMessage.show('فشلت العمليه  ',{cssClass:'alert-success',timeout:6000});            
    this.router.navigate(['login']);    
    
  })
  
  }
}
