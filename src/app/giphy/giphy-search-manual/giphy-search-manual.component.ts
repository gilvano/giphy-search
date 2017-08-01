import {Component, OnInit} from '@angular/core';
import {Response} from "@angular/http";
import {GiphySearchService} from "../giphy-search.service";

@Component({
  selector: 'giphy-search-manual',
  templateUrl: 'giphy-search-manual.component.html'
})

export class GiphySearchManualComponent implements OnInit {

  gifs: any[] = [];

  limit: string;
  term: string;

  constructor(private giphySearchService: GiphySearchService) {
  }

  ngOnInit() {
    //this.title.setTitle('By Gilvano');
  }

  pesquisarGiphy(){
    this.giphySearchService.pesquisarGiphy(this.limit, this.term)
      .subscribe((response: Response) =>{
       this.gifs = response.json().data;
      });
  }
}
