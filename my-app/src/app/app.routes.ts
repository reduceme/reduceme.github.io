import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {About} from "./about/about.component";
import {Index} from "./index/index.component";
import {Curriculum} from "./class/curriculum.component";
import {Faculty} from "./teacher/faculty.component";
import {Contact} from "./contact/contact.component";

const appRoutes = [{
  path: '',
  redirectTo: '/',
  pathMatch: 'full'
}, {
  path: "about",
  component: About
}, {
  path: "index",
  component: Index
}, {
  path: "curriculum",
  component: Curriculum
}, {
  path: "faculty",
  component: Faculty
}, {
  path: "contact",
  component: Contact
}];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
