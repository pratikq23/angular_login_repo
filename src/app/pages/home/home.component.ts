import { Component, OnInit,Output, EventEmitter } from '@angular/core';

import { LoginService } from '../../service/login.service';

@Component({
  selector: 'si-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  public userName: any;
  public checked: any;
  public indeterminate: any;
  public labelPosition: any;
  public disabled: any;

  constructor(){
    
    if(!!localStorage.getItem('user')) {
      let userObject: any = JSON.parse(localStorage.getItem('user'));
      this.userName = userObject.name;
    }
  }
}
