import { Person } from 'src/app/models/person.model';
import { PeopleService } from './../../services/people.service';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.scss']
})
export class PeopleDetailComponent implements OnInit {

  isEditMode = false
  id = ""
  person: Person = new Person()

  constructor(private router: Router, private route: ActivatedRoute, private service: PeopleService) {
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
  }

  ngOnInit() {
    if (this.isEditMode) {
      this.service.getPerson(this.id).subscribe((data) => {
        console.log(data)
        this.person = data
      },
        error => {
          console.log("Error:", error);
        }
      );
    } else {
      console.log("Estamos creando un personaje")
    }
  }

  get formatDate() {
    let mDate = moment(this.person?.birthday).format("DD/MM/YYYY")

    return mDate
  }

  editPerson() {
    console.log(this.person)

    this.service.updatePeople(this.person).subscribe((data) => {
      console.log(data)
    },
      error => {
        console.log("Error:", error);
      }
    );
  }

  createPerson() {
    console.log(this.person)
    this.service.savePeople(this.person).subscribe((data) => {
      console.log(data)
    },
      error => {
        console.log("Error:", error);
      }
    );
  }

}
