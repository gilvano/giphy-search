import { ContatoComponentService } from './contato.component.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms/forms";

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html'
})
export class ContatoComponent implements OnInit {

  constructor(private contatoComponentService: ContatoComponentService) { }

  ngOnInit() {
  }

  enviarContato(contatoForm: NgForm) {
      console.log(contatoForm.value);

      this.contatoComponentService.enviarContato(contatoForm.value).subscribe((response) => {
        console.log('Response', response);
        console.log('Fim!');
      })
  }

}
