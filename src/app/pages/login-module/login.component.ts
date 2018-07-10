import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../../service/login.service';

@Component({
  selector: 'si-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output() userIsLoggedIn = new EventEmitter<boolean>();
  public message:any;
  public username: any;
  public password: any;
  constructor( public loginService: LoginService,
  public router: Router) {
    var userObject = localStorage.getItem('user');
    
    if(!!userObject) {
      this.router.navigate(['/home']);  
    } else {
      this.router.navigate(['/login']);  
    }
  }

  //login user on sign in click
  loginUser() {
    let loginObject = {
      username:this.username,
      password: this.password
    }
    
    this.loginService.login(loginObject).subscribe( data=> {
      this.message = data.message;
      
      if(data.statusResponse) {
        localStorage.setItem('user',JSON.stringify(data.user));
        this.router.navigate(['/home']);  
      }     
    })
  }

}
