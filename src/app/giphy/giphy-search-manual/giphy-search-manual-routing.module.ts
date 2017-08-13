import { GiphySearchManualComponent } from './giphy-search-manual.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [{ path: '', component: GiphySearchManualComponent} ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GiphySearchManualRoutingModule {

}
