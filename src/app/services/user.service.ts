import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Usuario } from '../domain/usuario'
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly API = environment.API;

  constructor(private $http: HttpClient) { }

  listAll(): Observable<Usuario[]> {
    return this.$http.get<Usuario[]>(`${this.API}`);
  }

  findById(id: any): Observable<Usuario> {
    return this.$http.get<Usuario>(`${this.API}/${id}`);
  }

  update(id: any, usuario: Usuario): Observable<Usuario> {
    return this.$http.put<Usuario>(`${this.API}/${id}`, usuario);
  }

  delete(id: any): any {
    return this.$http.delete<any>(`${this.API}/${id}`);
  }

  create(obj: Usuario): any {
    return this.$http.post<any>(`${this.API}`, obj);
  }

  letraInicial(letra: string): Observable<Usuario[]> {
    return this.$http.get<Usuario[]>(`${this.API}/inicial/${letra}`);
  }

  aniversariantes(mes: any): Observable<Usuario[]> {
    return this.$http.get<Usuario[]>(`${this.API}/aniversariantes/${mes}`);
  }

  provedores(): any {
    return this.$http.get<any>(`${this.API}/provedores`);
  }
}
