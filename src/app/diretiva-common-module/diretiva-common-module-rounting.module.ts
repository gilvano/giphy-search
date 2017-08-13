import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DiretivaCommonModuleComponent } from './diretiva-common-module.component';
import { NgstyleExemploComponent } from './ngstyle-exemplo/ngstyle-exemplo.component';
import { NgclassExemploComponent } from './ngclass-exemplo/ngclass-exemplo.component';
import { NgswitchExemploComponent } from './ngswitch-exemplo/ngswitch-exemplo.component';



@NgModule({

  imports: [ RouterModule.forChild([
      { path: '', component: DiretivaCommonModuleComponent },
      { path: 'ngstyle', component: NgstyleExemploComponent },
      { path: 'ngclass', component: NgclassExemploComponent },
      { path: 'ngswitch', component: NgswitchExemploComponent },
    ])
  ]
})
export class DiretivaCommonModuleRoutingModule {
}
