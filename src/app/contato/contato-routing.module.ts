import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatoComponent } from './contato.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'contato' , component: ContatoComponent}
    ])
   ]
})
export class ContatoRoutingModule { }
