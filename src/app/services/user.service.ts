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

}
