import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [RouterModule.forRoot([
    /**
     *  Colocar rotas lazy
     **/
    {
      path: 'auto',
      loadChildren: 'app/giphy/giphy-search-auto/giphy-search-auto.module#GiphySearchAutoModule'
    },
    {
      path: 'giphy-search',
      loadChildren: 'app/giphy/giphy-search-manual/giphy-search-manual.module#GiphySearchManualModule'
    },
    {
      path: 'diretiva-common-module',
      loadChildren: 'app/diretiva-common-module/diretiva-common-module.module#DiretivaCommonModuleModule'
    },
    {
      path: 'pipe',
      loadChildren: 'app/pipe/pipe.module#PipeModule'
    }

  ]) ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

