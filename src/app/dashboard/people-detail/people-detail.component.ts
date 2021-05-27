import { Person } from 'src/app/models/person.model';
import { PeopleService } from './../../services/people.service';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.scss']
})
export class PeopleDetailComponent implements OnInit {

  isEditMode = false
  id = ""
  birthday: string = ""
  mForm: FormGroup

  constructor(private router: Router, private fb: FormBuilder, private route: ActivatedRoute, private service: PeopleService) {
    this.router.events.subscribe(route => {

      if (route instanceof NavigationEnd) {
        if (route.url.includes("edit")) {
          this.isEditMode = true
          this.id = this.route.snapshot.paramMap.get("id") || ""
        } else {
          this.isEditMode = false
        }
      }

    })

    this.mForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      surname: ['', [Validators.required, Validators.minLength(2)]],
      job: ['', [Validators.required, Validators.minLength(2)]],
      biography: ['', [Validators.required, Validators.minLength(2)]],
      birthday: ['', [Validators.required, Validators.minLength(2)]],
      picture: ['', [Validators.required, Validators.minLength(2)]],
    })
  }

  ngOnInit() {
    this.loadData()
  }

  get f() {
    return this.mForm.controls
  }

  loadData() {
    if (this.isEditMode) {
      this.service.getPerson(this.id).subscribe((data) => {
        const formattedDated = moment(data.birthday).format("YYYY-MM-DD")
        this.mForm.patchValue({
          name: data.name,
          surname: data.surname,
          job: data.job,
          birthday: formattedDated,
          biography: data.biography,
          picture: data.picture,
        })

      },
        error => {
          console.log("Error:", error);
        }
      );
    } else {
      console.log("Estamos creando un personaje")
    }
  }

  editPerson() {
    const person: Person = this.readPerson()

    this.service.updatePeople(person).subscribe((data) => {
      console.log(data)
    },
      error => {
        console.log("Error:", error);
      }
    );
  }


  createPerson() {

    this.service.savePeople(this.readPerson()).subscribe((data) => {
      console.log(data)
    },
      error => {
        console.log("Error:", error);
      }
    );
  }

  readPerson(): Person {
    const person: Person = new Person()

    person.name = this.f.name.value
    person.surname = this.f.surname.value
    person.job = this.f.job.value
    person.biography = this.f.biography.value
    person.birthday = this.f.birthday.value
    person.picture = this.f.picture.value

    return person
  }

}
