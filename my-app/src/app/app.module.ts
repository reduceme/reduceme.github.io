import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

//组件
import {AppComponent} from './app.component';
import {About} from  './about/about.component';

//路由组件
import {AppRoutingModule} from './app.routes'

@NgModule({
  declarations: [
    AppComponent,
    About
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
