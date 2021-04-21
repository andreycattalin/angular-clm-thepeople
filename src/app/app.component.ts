import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import 'moment/locale/es'
import * as moment from 'moment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'thepeople';

  isLogin = false

  constructor(private router: Router) {
    moment.locale('es')
  }

  ngOnInit() {
    this.router.events.subscribe(route => {
      if (route instanceof NavigationEnd) {
        if (route.url == "/login" || route.url == "/register" || route.url.includes("dashboard")) {
          this.isLogin = true
        } else {
          this.isLogin = false
        }
      }

    })
  }
}
