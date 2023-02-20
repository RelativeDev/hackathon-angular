import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'
import { Usuario } from '../domain/usuario'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  User: Usuario[] = []

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  findAll() {
    this.userService.listAll().subscribe( resposta => {
      this.User = resposta
    })
  }

}
