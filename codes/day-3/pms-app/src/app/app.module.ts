import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsModule } from './modules/products/products.module';
import { AppcommonModule } from './modules/appcommon/appcommon.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, RouterModule, ProductsModule, AppcommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
