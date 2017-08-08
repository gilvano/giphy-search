import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

const host = 'http://dbapi.io/db/coll';

@Injectable()
export class ContatoComponentService {

  constructor(private http: Http) {

  }

  enviarContato(contatoForm: any): Observable<Response> {
    let nomeCompleto = contatoForm.nomeCompleto;
    let email = contatoForm.email;
    let mensagem = contatoForm.mensagem;

    return this.http.post(host, {email: email, from: nomeCompleto, message: mensagem});
  }
}
