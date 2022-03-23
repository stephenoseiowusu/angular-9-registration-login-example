import { Component, OnInit } from '@angular/core';
import { LoginSignUpService } from '@app/_services/login-sign-up-service.service';
import { SignUpModel } from '@app/_models/sign-up-model.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.less']
})
export class SignUpComponent implements OnInit {

  public username:string;
  public password:string;
  constructor(private loginSignUpService:LoginSignUpService) { 

  }
  signUpUser(firstName:string, lastName:string, username:string,password:string){
    this.loginSignUpService.signUpAirlineUser(new SignUpModel(username,password,firstName,lastName));
  }
  ngOnInit(): void {
  }

}
