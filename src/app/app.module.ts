import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {LoginSignUpService} from "./_services/login-sign-up-service.service";
// used to create fake backend
import { fakeBackendProvider } from './_helpers';
import {NgxSmartModalService} from "ngx-smart-modal";
import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { AlertComponent } from './_components';
import { HomeComponent } from './home';;
import { AirlineUserDashboardComponent } from './_components/airline-user-dashboard/airline-user-dashboard.component'
;
import { LandingpageComponent } from './_components/landingpage/landingpage.component'
;
import { SignUpComponent } from './_components/sign-up/sign-up.component';
@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent
,
        AirlineUserDashboardComponent ,
        LandingpageComponent ,
        SignUpComponent  ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        LoginSignUpService,
        fakeBackendProvider,
        NgxSmartModalService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };