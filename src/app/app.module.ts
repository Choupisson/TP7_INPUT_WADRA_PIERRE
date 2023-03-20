import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Tirelire1Component } from './tirelire1/tirelire1.component';
import { Tirelire2Component } from './tirelire2/tirelire2.component';
import { Tirelire3Component } from './tirelire3/tirelire3.component';

@NgModule({
  declarations: [
    AppComponent,
    Tirelire1Component,
    Tirelire2Component,
    Tirelire3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
