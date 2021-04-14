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

  loadData() {
    this.allPersons = [
      {
        "bio": "Cillum laborum aliquip officia magna do sunt est fugiat id incididunt. Magna laboris officia veniam cillum id exercitation adipisicing consectetur. Id deserunt aute dolor sint esse non esse exercitation aute officia aliqua quis excepteur labore. Incididunt mollit velit labore minim velit ad cupidatat labore adipisicing veniam.\r\n",
        "name": "Danielle Frye",
        "photo": "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "birthdate": moment('2019-07-13T01:41:39').format("DD [de] MMMM [de] YYYY"),
        "job": "Programador",
        "_id": "606d5fc21071e6e38e8ef840"
      },
      {
        "bio": "Elit ad ipsum exercitation Lorem ea quis irure elit ea sunt sunt ex in deserunt. Fugiat irure ipsum cupidatat ad ullamco velit nostrud aliquip. Qui do est ea id Lorem magna ipsum proident.\r\n",
        "name": "Lee Mendoza",
        "photo": "https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
        "birthdate": moment("2014-02-16T07:00:22").format("DD [de] MMMM [de] YYYY"),
        "job": "Programador",
        "_id": "606d5fc27f29b33cc9e233d7"
      },
      {
        "bio": "Aute excepteur sit eu ipsum cupidatat cupidatat anim quis pariatur veniam officia exercitation. Aliqua esse adipisicing eu laborum occaecat officia eu. Eu eu eu elit eu pariatur ea aute aliquip minim do officia consectetur. Magna sint veniam duis ad cupidatat veniam ex incididunt enim nostrud ullamco exercitation amet. Consequat enim pariatur ut cillum cupidatat et et adipisicing labore dolore ad veniam. Officia qui ea Lorem eu ea esse. Eu est laboris sint occaecat eu velit incididunt reprehenderit.\r\n",
        "name": "Ortega Herman",
        "photo": "https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
        "birthdate": "2020-03-07T03:56:50 -01:00",
        "job": "Programador",
        "_id": "606d5fc287d28c5f7e503f8e"
      },
      {
        "bio": "Aute adipisicing culpa ullamco reprehenderit veniam cillum commodo laboris reprehenderit tempor culpa consectetur et. Officia eiusmod sit non ea incididunt eiusmod laborum ut. Reprehenderit culpa officia est pariatur do occaecat qui esse adipisicing consectetur ad consequat in. Laboris fugiat esse id cupidatat officia et ipsum.\r\n",
        "name": "Atkinson Dudley",
        "photo": "https://images.unsplash.com/photo-1611262203103-eb25717351ab?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=797&q=80",
        "birthdate": "2016-03-24T10:07:01 -01:00",
        "job": "Programador",
        "_id": "606d5fc2eb9ee5e1c3ddae6e"
      },
      {
        "bio": "Anim voluptate culpa amet quis. In cillum do nostrud et pariatur. Commodo cillum deserunt consequat aute. Tempor sunt qui occaecat officia sit non esse esse consequat. Officia incididunt do ex tempor ex irure ad. Esse nisi id aute non ex duis eiusmod veniam quis ex sit.\r\n",
        "name": "Robles Navarro",
        "photo": "https://images.unsplash.com/photo-1579503841516-e0bd7fca5faa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "birthdate": "2019-10-01T03:22:32 -02:00",
        "job": "Programador",
        "_id": "606d5fc2454ef73ad47c070a"
      },
      {
        "bio": "Veniam ad sunt sit amet et incididunt do sit veniam amet. Adipisicing amet veniam sunt voluptate in laborum Lorem velit pariatur minim commodo. Sit est incididunt reprehenderit eu proident amet ad duis ad aliquip. Irure enim cupidatat ut magna in fugiat. Incididunt amet anim ullamco nostrud mollit labore aliquip cupidatat excepteur pariatur proident officia reprehenderit. Esse do magna proident aliquip anim eu nulla amet et velit ex. Incididunt aliqua laboris laboris anim sint veniam voluptate velit eu enim voluptate.\r\n",
        "name": "Therese Holloway",
        "photo": "https://images.unsplash.com/photo-1585699324524-5e642b2b30d8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "birthdate": "2015-04-19T03:08:16 -02:00",
        "job": "Programador",
        "_id": "606d5fc2c9be90d2edd23569"
      },
      {
        "bio": "Aliquip sunt magna ea sunt Lorem pariatur adipisicing adipisicing. Ex tempor qui aute minim esse quis aliqua Lorem irure est mollit. Mollit do tempor do dolor voluptate. Minim fugiat excepteur aute irure. Irure sunt labore ullamco proident proident. Qui nisi est adipisicing cupidatat et veniam proident proident ea aliqua minim sunt dolore cillum.\r\n",
        "name": "Hensley Lynn",
        "photo": "https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
        "birthdate": "2014-09-09T09:33:30 -02:00",
        "job": "Programador",
        "_id": "606d5fc28df30055aa90d7cb"
      },
      {
        "bio": "Esse deserunt aliquip pariatur ut irure veniam. Irure aliqua voluptate id adipisicing qui labore nulla officia ipsum labore sint. Do adipisicing est velit cupidatat.\r\n",
        "name": "Jo Walsh",
        "photo": "https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
        "birthdate": "2015-04-07T06:44:11 -02:00",
        "job": "Programador",
        "_id": "606d5fc26697206392b6adee"
      },
      {
        "bio": "Est amet enim velit consequat incididunt nulla fugiat cupidatat eu adipisicing ullamco incididunt occaecat. Et aute ex excepteur est irure excepteur commodo sit ipsum id proident velit tempor. Consequat exercitation duis ex id velit veniam duis ea. Labore mollit duis irure aute ullamco voluptate aliquip est consectetur consectetur sit ullamco nulla. Cillum tempor eu non ullamco aliqua culpa fugiat anim. Ex consequat laborum laboris exercitation.\r\n",
        "name": "Ellison Webb",
        "photo": "https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
        "birthdate": "2018-06-17T06:32:19 -02:00",
        "job": "Programador",
        "_id": "606d5fc2170d728c10b54659"
      },
      {
        "bio": "Eu labore id ea velit non irure incididunt. Lorem ex mollit consequat et cillum incididunt quis Lorem nulla commodo fugiat. Nisi nostrud voluptate nostrud commodo dolor. Velit nisi veniam irure pariatur. Ullamco mollit qui aute dolore do anim laboris culpa.\r\n",
        "name": "Toni Roach",
        "photo": "https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
        "birthdate": "2017-07-21T05:47:20 -02:00",
        "job": "Programador",
        "_id": "606d5fc25bf3f8f09d384ab8"
      },
      {
        "bio": "Ullamco nostrud duis nisi amet duis reprehenderit amet enim commodo veniam duis sit anim veniam. Fugiat veniam aliquip consectetur commodo aute ea et nulla commodo eu incididunt. Laborum proident ipsum elit reprehenderit mollit non id sunt reprehenderit aliqua. Nostrud qui sit do veniam non.\r\n",
        "name": "Betsy Woodward",
        "photo": "https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
        "birthdate": "2019-03-05T08:31:04 -01:00",
        "job": "Programador",
        "_id": "606d5fc2762d5712856714a1"
      },
      {
        "bio": "Nisi exercitation do id commodo dolore pariatur. Incididunt incididunt ut sit exercitation id. Consequat cillum consectetur non laborum. Sit deserunt sint pariatur mollit proident ea id laborum.\r\n",
        "name": "Madge Lambert",
        "photo": "https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
        "birthdate": "2017-02-11T03:59:14 -01:00",
        "job": "Programador",
        "_id": "606d5fc2b278be3fd63c7588"
      }
    ]
  }

}
