import { DiretivaCommonModuleRoutingModule } from './diretiva-common-module-rounting.module';
import { DiretivaCommonModuleComponent } from './diretiva-common-module.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgclassExemploComponent } from './ngclass-exemplo/ngclass-exemplo.component';
import { NgstyleExemploComponent } from './ngstyle-exemplo/ngstyle-exemplo.component';
import { NgswitchExemploComponent } from './ngswitch-exemplo/ngswitch-exemplo.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule, RouterModule, DiretivaCommonModuleRoutingModule
  ],
  declarations: [DiretivaCommonModuleComponent,
    NgclassExemploComponent,
    NgstyleExemploComponent,
    NgswitchExemploComponent ],
  providers: []
})
export class DiretivaCommonModuleModule { }
