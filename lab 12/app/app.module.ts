import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './count.component';
import { Counter2Component } from './count2.component';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
  Counter2Component
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
