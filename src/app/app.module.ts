import { ContatoModule } from './contato/contato.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { GiphySearchManualComponentModule } from "./giphy/giphy-search-manual/giphy-search-manual.module";
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { GiphySearchAutoModule } from './giphy/giphy-search-auto/giphy-search-auto.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    GiphySearchManualComponentModule,
    AppRoutingModule,
    ContatoModule,
    PageNotFoundModule,
    GiphySearchAutoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
