import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Injector } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimplChartsNgModule } from '@simpl/charts-ng';
import { MdButtonModule, MdCheckboxModule,MaterialModule } from '@angular/material';

//common module
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  } from '@angular/material'
import 'hammerjs';

//component
import { AppComponent } from './app.component';
import { FooterModuleComponent } from './shared/footer-module/footer-module.component';
import { HeaderModuleComponent } from './shared/header-module/header-module.component';
import { LoginComponent } from './pages/login-module/login.component';
import { HomeComponent }  from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { TeamComponent } from './pages/team/team.component';

//service
import { LoginService } from './service/login.service';
import { AuthGuard } from './service/auth.service';
import { AboutService } from './service/about.service';
import { TeamService } from './service/team.service';



@NgModule({
  declarations: [
    AppComponent,
    FooterModuleComponent,
    HeaderModuleComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    TeamComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    SimplChartsNgModule,
    BrowserAnimationsModule,
    MaterialModule,
    MdCheckboxModule,
    MdButtonModule
  ],

  providers: [ 
    LoginService,
    AuthGuard,
    AboutService,
    TeamService 
  ],

  bootstrap: [AppComponent]
})
export class AppModule { 

}
