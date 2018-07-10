import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'si-header',
  templateUrl: './header-module.component.html',
  styleUrls: ['./header-module.component.css']
})
export class HeaderModuleComponent implements OnInit {
  constructor(public router: Router) { }

  ngOnInit() { }

  //logout user
  logout() {
    localStorage.clear();
    this.router.navigate(['/login'])
  }
}
