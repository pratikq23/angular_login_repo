import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public isLoggedIn: boolean = false;
  constructor( public loginService: LoginService,
  public router: Router) {
    
  }
  
}
