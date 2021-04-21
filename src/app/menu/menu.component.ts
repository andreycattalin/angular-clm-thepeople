import { AuthService } from './../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  bgWhite = false

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.router.events.subscribe(route => {

      if (route instanceof NavigationEnd) {
        if (route.url == "/") {
          this.bgWhite = false
        } else {
          this.bgWhite = true
        }
      }

    })
  }
  //Cuando pulsemos en SUBIR NUEVO comprobar si estoy logueado:

  //Si estoy logueado iremos a subir nuevo
  //Si no estoy logueado iremos al login

  // He añadido esto porque cuando volvias atras
  // desde el componente de login se ponía transparente el fondo
  ngAfterContentInit() {
    this.bgWhite = true
  }

  upload() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(["dashboard/people/new"])
    } else {
      this.router.navigate(["/login"])
    }
  }


}
