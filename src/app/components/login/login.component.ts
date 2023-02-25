import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Login } from 'src/app/domain/login';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = {
    login: '',
    password: ''
  }

  constructor(private authService: AuthService, private router: Router, private messageService: MessageService) { }

  ngOnInit(): void {
  }

  logar() {
    this.authService.authenticate(this.login).subscribe( resposta => {
      this.authService.addUser(resposta);
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Usuário deletado com sucesso!', life: 3000 })
      this.router.navigate(['/home']);
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'Falha', detail: error.error.message, life: 3000 })
    })
   
  }

}
