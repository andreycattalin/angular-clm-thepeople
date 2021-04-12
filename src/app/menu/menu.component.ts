import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  bgWhite = false

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe( route => {

      if(route instanceof NavigationEnd) {
        if(route.url == "/") {
          this.bgWhite = false
        } else {
          this.bgWhite = true
        }
      }

    })
  }

}
