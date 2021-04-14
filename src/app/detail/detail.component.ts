import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute) {

    this.activeRoute.params.subscribe( parm => {
      console.log(parm.id)

      // TODO llamar a API
    })

  }

  ngOnInit() {
  }

}
