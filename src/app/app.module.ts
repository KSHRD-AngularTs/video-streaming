import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {PlyrModule} from 'ngx-plyr';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PlyrModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
