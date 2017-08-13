import { AppWelcomeModule } from './app-welcome/app-welcome.module';
import {ContatoModule} from './contato/contato.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { FormsModule } from "@angular/forms";

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {PageNotFoundModule} from './page-not-found/page-not-found.module';
import {AppWelcomeComponent} from './app-welcome/app-welcome.component';
import { GiphySearchManualModule } from './giphy/giphy-search-manual/giphy-search-manual.module';
import { GiphySearchAutoModule } from './giphy/giphy-search-auto/giphy-search-auto.module';


@NgModule({
  declarations: [
    AppComponent,
    AppWelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ContatoModule,
    AppWelcomeModule,
    PageNotFoundModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
