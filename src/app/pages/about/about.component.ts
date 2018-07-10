import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { AboutService } from '../../service/about.service';


@Component({
  selector: 'si-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  public aboutList:any = [];
  constructor(public aboutService: AboutService) {
    this.aboutService.getAboutInfo().subscribe(data=>{
      this.aboutList = data.aboutData;
    });
  }

}
