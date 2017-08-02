import {NgModule} from '@angular/core';
import {GiphySearchManualComponent} from './giphy-search-manual.component';
import {GiphySearchService} from "../giphy-search.service";
import {ShareModuleModule} from "../../share/share.module";
import {GiphySearchListModule} from "../giphy-search-list/giphy-search-list.module";

@NgModule({
  imports: [ShareModuleModule, GiphySearchListModule],
  exports: [GiphySearchManualComponent],
  declarations: [GiphySearchManualComponent],
  providers: [GiphySearchService],
})
export class GiphySearchManualComponentModule {
}
