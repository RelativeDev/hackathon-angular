import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'
import { Usuario } from '../../domain/usuario'
import { PrimeNGConfig } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { months } from '../../domain/months'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [MessageService]
})
export class UserListComponent implements OnInit {

  show: boolean = false

  deleteShow = false
  createShow = false
  updateShow = false
  provedoresShow = false

  selectedMonth: any

  user: Usuario

  User: Array<Usuario | string> = []

  months2: any = months;

  constructor(private userService: UserService,
    private primengConfig: PrimeNGConfig,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.findAll()
  }

  findAll() {
    this.userService.listAll().subscribe(resposta => {
      this.show = true
      this.User = resposta
    })
  }

  deletarShow(user: Usuario) {
    this.user = user
    this.deleteShow = true
  }

  onCloseForm(cancel: any) {
    this.deleteShow = false
    this.updateShow = false
    this.createShow = false
    this.provedoresShow = false
    if (!cancel){
      this.ngOnInit()
    }
  }

  update(user: Usuario){
    this.user = user
    this.updateShow = true
  }

  create() {
    this.createShow = true
  }

  inicial(letra: string){
    this.userService.letraInicial(letra).subscribe(resposta => {
        this.User = resposta
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'Falha', detail: error.error.message, life: 3000 })
    });
  }

  activeState: boolean[] = [true, false, false];

    toggle(index: number) {
        this.activeState[index] = !this.activeState[index];
    }

  onMonthSelected(event: any) {
    this.userService.aniversariantes(event.value.value).subscribe(resposta => {
      this.User = resposta
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'Falha', detail: error.error.message, life: 3000 })
    })
  }

  provedores(){
    this.provedoresShow = true;
  }

  listAll() {
    this.show = false
    this.findAll()
  }

}
