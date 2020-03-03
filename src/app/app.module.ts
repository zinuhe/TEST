import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp01Component } from './comp01/comp01.component';
import { Comp02Component } from './comp02/comp02.component';
import { Comp04Component } from './comp04/comp04.component';
import { Comp5Component } from './comp5/comp5.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp01Component,
    Comp02Component,
    Comp04Component,
    Comp5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
