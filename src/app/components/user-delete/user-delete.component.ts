import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Usuario } from 'src/app/domain/usuario';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {

  @Output() closeForm: EventEmitter<any> = new EventEmitter();

  @Input() usuario: Usuario

  constructor(
    private service: UserService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  delete(): void {
    this.service.delete(this.usuario.id).subscribe(
      () => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Usuário deletado com sucesso!', life: 3000 })

        this.closeForm.emit(false)
      },
      error => {
        this.messageService.add({ severity: 'error', summary: 'Falha', detail: error.error.message, life: 3000 })
        this.closeForm.emit(true)
      }
    );
  }

  cancel(): void {
    this.closeForm.emit(true)
  }


}
