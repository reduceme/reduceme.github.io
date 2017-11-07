import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {About} from "./about/about.component";

const appRoutes = [{
  path: '',
  redirectTo: '/',
  pathMatch: 'full'
}, {
  path: "about",
  component: About
}];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
