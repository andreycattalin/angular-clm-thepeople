import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  mForm: FormGroup
  isSent = false

  constructor(private router: Router, private fb: FormBuilder) {

    this.mForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{4,30}$/)]]
    })

   }

  ngOnInit() {
  }

  login() {
    this.router.navigate(["/login"])
  }

  get f() {
    return this.mForm.controls
  }

  onSubmit() {

    this.isSent = true

    console.log("Enviar form");

    if(this.mForm.invalid) {
      return
    }

    console.log("Login valido", this.mForm.value);
    // Atacar a localhost:3001/api/register

    // api dice 200??
    this.router.navigate(["/dashbaord"])

  }


}
