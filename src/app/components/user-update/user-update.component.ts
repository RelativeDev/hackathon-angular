import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/domain/usuario';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  @Output() closeForm: EventEmitter<any> = new EventEmitter();

  @Input() usuario: Usuario

  nome: string
  sobrenome: string

  UpdateUser: Usuario = {
    nome: '',
    email: '',
    login: '',
    password: '',
    dataDeNascimento: ''
  }

  ngOnInit(): void {
    this.nome = this.usuario.nome.split(" ")[0]
    this.sobrenome = this.usuario.nome.split(" ")[1]
  }

  userCreateForm: FormGroup;

  constructor(private userService: UserService, private messageService: MessageService) {
    this.userCreateForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.maxLength(25), this.noWhitespace]),
      lastName: new FormControl('', [Validators.required, this.noWhitespace, Validators.maxLength(25)]),
      login: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20), this.noWhitespace]),
      email: new FormControl('', [Validators.required, Validators.minLength(10), Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(4),
      Validators.maxLength(10), this.letraMinuscula, this.letraMaiscula, this.numeroSenha, this.caracterEspecial, this.noWhitespace]),
      dataDeNascimento: new FormControl('', [])
    });
  }

  addUser() {
    this.UpdateUser.nome = this.userCreateForm.controls[('firstName')].value + " " + this.userCreateForm.controls[('lastName')].value;
    this.UpdateUser.login = this.userCreateForm.controls[('login')].value;
    this.UpdateUser.email = this.userCreateForm.controls[('email')].value;
    this.UpdateUser.dataDeNascimento = this.userCreateForm.controls[('dataDeNascimento')].value;
    this.UpdateUser.password = this.userCreateForm.controls[('password')].value;
    this.update()
  }

  validators() {
    return this.userCreateForm.valid
  }

  noWhitespace(control) {
    if (control.value && control.value.trim().length == 0) {
      return { whitespace: true };
    }
    return null;
  }

  letraMinuscula(control) {
    const value = control.value;
    if (!value) {
      return null; // campo vazio, não é necessário validar
    }
    const regex = /(?=.*[a-z])/;
    const valid = regex.test(control.value);
    return valid ? null : { letraMinuscula: true };
  }

  letraMaiscula(control) {
    const value = control.value;
    if (!value) {
      return null;
    }

    const regex = /(?=.*[A-Z])/;
    const valid = regex.test(value);
    return valid ? null : { letraMaiscula: true };
  }

  numeroSenha(control) {
    const value = control.value;
    if (!value) {
      return null;
    }

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;
    const valid = regex.test(value);
    return valid ? null : { numeroSenha: true };
  }

  caracterEspecial(control) {
    const value = control.value;
    if (!value) {
      return null;
    }
    const regex = /(?=.*[!@#$%^&*])/;
    const valid = regex.test(value);
    return valid ? null : { caracterEspecial: true };
  }


  update() {
    this.UpdateUser.nome = this.nome + " " + this.sobrenome
    delete this.UpdateUser.dataDeCriacao
    delete this.UpdateUser.dataDeAtualizacao
    const id = this.usuario.id
    delete this.UpdateUser.id
    console.log(this.UpdateUser)
    this.userService.update(id, this.UpdateUser).subscribe(() => {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Usuário atualizado com sucesso!', life: 3000 })
      this.closeForm.emit(false)
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'Falha', detail: error.error.message, life: 3000 })
    })
  }

  cancel() {
    this.closeForm.emit(true)
  }

}
