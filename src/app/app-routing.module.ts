import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [RouterModule.forRoot([
    /**
     *  Colocar rotas lazy
     */
     { path: '**', component: PageNotFoundComponent }
  ]) ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

