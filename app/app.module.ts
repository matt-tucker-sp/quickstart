import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StringUtilsModule } from 'string-utils';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, StringUtilsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
