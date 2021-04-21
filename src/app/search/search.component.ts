import { PeopleService } from './../services/people.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { Person } from '../models/person.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  allPersons: Array<Person> = []
  nameSearch: string = ""
  dateStartSearch: string = ""
  dateEndSearch: string = ""

  constructor(private activeRoute: ActivatedRoute, private router: Router, private service: PeopleService) { }

  ngOnInit() {

    this.activeRoute.queryParams.subscribe(value => {
      if (value.name != undefined) {
        this.nameSearch = value.name
      }

      // Todos los datos de la ruta
      console.log(value)
    })

    this.loadData()
  }

  // Cada vez que escribo esta funcion se llama
  onSearchChange(searchValue: any) {
    this.nameSearch = searchValue.target.value
    this.loadData()
  }

  startChange(data: any) {
    // convertimos la fecha
    let mDate = moment(data.value).format("DD/MM/YYYY")
    this.dateStartSearch = mDate
  }

  endChange(data: any) {
    if (data.value != null) {
      // convertimos la fecha
      console.log(data.value)
      let mDate = moment(data.value).format("DD/MM/YYYY")
      this.dateEndSearch = mDate
      //this.router.navigate(["/search"], { queryParams: { name: this.nameSearch, start: this.dateStartSearch, end: this.dateEndSearch } })
      this.loadData()
    }
  }

  loadData() {
    //LAMADA AL SERVICIO GET PROFILES
    /*
    Implementar la llamada al servicio SIN filtros primero
    Luego añadir filtro fecha y texto
    */

    let start = moment(this.dateStartSearch,"DD/MM/YYYY").format("YYYY/MM/DD")
    let end = moment(this.dateEndSearch,"DD/MM/YYYY").format("YYYY/MM/DD")

    if(!this.dateStartSearch || !this.dateEndSearch){
      start = ""
      end = ""
    }

    this.service.getPeople(this.nameSearch,
      start,
      end).subscribe((data) => {
        console.log(data)
        this.allPersons = data
      },
        error => {
          console.log("Error:", error);
        }
      );
  }

  formatDate(date?: string): string {
    return moment(date).format("DD [de] MMMM [de] YYYY")
  }

}
