import { AuthGuardService } from './services/auth/auth-guard.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PeopleDetailComponent } from './dashboard/people-detail/people-detail.component';
import { PeopleListComponent } from './dashboard/people-list/people-list.component';

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "search", component: SearchComponent },
  { path: "detail/:id", component: DetailComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  {
    path: "dashboard", component: DashboardComponent, children: [
      { path: "", pathMatch: "full", redirectTo: "list" },
      { path: "list", component: PeopleListComponent },
      { path: "people/new", component: PeopleDetailComponent },
      { path: "people/:id/edit", component: PeopleDetailComponent },
    ], canActivate: [AuthGuardService],
  },
  { path: "404", component: NotFoundComponent },
  { path: "**", redirectTo: "/404" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
