import { ContatoRoutingModule } from './contato-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModuleModule } from '../share/share.module';
import { ContatoComponent } from './contato.component';

@NgModule({
  imports: [ ShareModuleModule, ContatoRoutingModule
  ],
  declarations: [ContatoComponent]
})
export class ContatoModule { }
