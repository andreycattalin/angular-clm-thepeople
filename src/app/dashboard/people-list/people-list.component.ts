import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person.model';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  allPersons: Array<Person> = []

  constructor(private router: Router) {
    this.loadData()
   }

  ngOnInit() {
  }

  addNew() {
    this.router.navigate(["dashboard/people/new"])
  }

  editPerson(id: any) {
    this.router.navigate(["dashboard/people/"+id+"/edit"])
  }

  logout(){
    //PEDIR CONFIRMACION DEL LOGOUT
    localStorage.removeItem("token")
    this.router.navigate(["/"])
  }

  loadData() {
    this.allPersons =[] //data //que llegara de service
  }

}
