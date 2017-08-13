import { DiretivaCommonModuleRoutingModule } from './diretiva-common-module-rounting.module';
import { DiretivaCommonModuleComponent } from './diretiva-common-module.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgClassExemploComponent } from './ngclass-exemplo/ngclass-exemplo.component';
import { NgStyleExemploComponent } from './ngstyle-exemplo/ngstyle-exemplo.component';
import { NgSwitchExemploComponent } from './ngswitch-exemplo/ngswitch-exemplo.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule, RouterModule, DiretivaCommonModuleRoutingModule
  ],
  declarations: [DiretivaCommonModuleComponent,
    NgClassExemploComponent,
    NgStyleExemploComponent,
    NgSwitchExemploComponent ],
  providers: []
})
export class DiretivaCommonModuleModule { }
