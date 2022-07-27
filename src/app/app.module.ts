import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CObjeto } from './c00-objeto/objeto.component';

@NgModule({
  declarations: [
    AppComponent,
    CObjeto,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }