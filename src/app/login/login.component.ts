import { Login } from './../models/login.model';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  mForm: FormGroup
  isSent = false

  constructor(private router: Router, private fb: FormBuilder, private userService: UserService) {

    this.mForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.pattern(/^(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{4,30}$/)]]
    })

  }

  ngOnInit() {
    //Comprobar si estoy logueado, si estoy logueado que vaya al dasbboard
  }

  signup() {
    this.router.navigate(["/register"])
  }

  get f() {
    return this.mForm.controls
  }

  onSubmit() {

    this.isSent = true

    console.log("Enviar form");

    if (this.mForm.invalid) {
      return
    }
    /*Hacer llamada al service
    Hacer dos servicios: user, people
    llamar al servicio de login y en la respuesta guardar en el localStorage el token y redirigir al DASHBOARD
    */

    const login: Login = new Login()
    login.email = this.f.email.value
    login.password = this.f.password.value
    this.userService.login(login).subscribe((data: any) => {
      localStorage.setItem("token",data.access_token)
      this.router.navigate(["/dashboard"])
      console.log(data)
    },
      error => {
        console.log("Error:", error);
      }
    );

  }
}
