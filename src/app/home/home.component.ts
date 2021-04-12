import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit() {

  }

  search(searchValue: string){
    if(searchValue == "") {
      this.router.navigate(["/search"])
    } else {
      this.router.navigate(["/search"], { queryParams: { name: searchValue}})
    }
  }

}
