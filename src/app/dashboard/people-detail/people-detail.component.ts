import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.scss']
})
export class PeopleDetailComponent implements OnInit {

  isEditMode = false

  constructor(private router: Router) {
    this.router.events.subscribe( route => {

      if(route instanceof NavigationEnd) {
        if(route.url.includes("edit")) {
          this.isEditMode = true
        }
      }

    })
   }

  ngOnInit() {
  }

}
