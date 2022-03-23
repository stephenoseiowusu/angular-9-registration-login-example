import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SignUpModel} from "./../_models/sign-up-model.model";
import {Subject} from "rxjs";
import { LoginModel } from '@app/_models/login-model.model';
@Injectable()
export class LoginSignUpService {
   private connectorToComponent:Subject<{[key:string]:string}>;
   private baseUrl_:string = "http://localhost:8080";
   constructor(private httpClient:HttpClient) 
  { 
    this.connectorToComponent = new Subject<{[key:string]:string}>();
  }
  public signUpAirlineUser(signUpModel:SignUpModel){
     var url = `${this.baseUrl_}/airlineController/createAirlineUserAccount`;
     this.httpClient.post(url,signUpModel,{observe : 'response'}).subscribe( response => {
         if(response.status == 200 ){
           this.connectorToComponent.next({"signUp":"successful"});
         }else if(response.status == 500){
           this.connectorToComponent.next({"signUp":"failure"});
         }
     });
  }
  public loginAirlineUser(loginModel:LoginModel){
    var url = `${this.baseUrl_}/airlineController/createAirlineUserAccount`;
    this.httpClient.post(url,loginModel,{observe : 'response'}).subscribe( response => {
        if(response.status == 200 ){
          this.connectorToComponent.next({"signUp":"successful"});
        }else if(response.status == 500){
          this.connectorToComponent.next({"signUp":"failure"});
        }
    });
 }
}
