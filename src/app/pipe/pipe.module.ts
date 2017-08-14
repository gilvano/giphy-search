import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PipeComponent } from './pipe.component';
import { PipeRountingModule } from './pipe-rounting.module';
import { TipoPessoaPipe } from '../share/pipe/tipo-pessoa.pipe';
import { CapitalizePipe } from './../share/pipe/capitalize.pipe';

@NgModule({
  imports: [
    CommonModule, RouterModule, PipeRountingModule
  ],
  declarations: [PipeComponent, TipoPessoaPipe, CapitalizePipe ],
  providers: []
})
export class PipeModule { }
