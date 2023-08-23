import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SecondComponent } from './second/second.component';
import { SecondModule } from './second/second.module';

@NgModule({
  //register 1. components 2. directives 3. pipes
  declarations: [
    AppComponent
    //, SecondComponent
  ],
  //register modules (1. app features modules 2. bulit-in modules)
  imports: [
    BrowserModule, SecondModule
  ],
  //register your services
  providers: [],
  bootstrap: [
    AppComponent,
    //SecondComponent
  ]
})
export class AppModule {
  constructor() {
    console.log("App module created")
  }
}
