import { NgModule, OnInit, } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found.component';
import { routing } from './page-not-found.routes';

@NgModule({
  imports: [ CommonModule, routing ],
  declarations: [ PageNotFoundComponent ],
  exports: [ PageNotFoundComponent ]
})
export class PageNotFoundModule  {

}
