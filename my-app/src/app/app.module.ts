import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

//组件
import {AppComponent} from './app.component';
import {About} from  './about/about.component';
import {Index} from  './index/index.component';
import {Curriculum} from "./class/curriculum.component";
import {Faculty} from "./teacher/faculty.component";
import {Contact} from "./contact/contact.component";

//路由组件
import {AppRoutingModule} from './app.routes'

@NgModule({
  declarations: [
    AppComponent,
    About,
    Index,
    Curriculum,
    Faculty,
    Contact
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
