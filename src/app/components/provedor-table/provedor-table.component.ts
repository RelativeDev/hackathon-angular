import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-provedor-table',
  templateUrl: './provedor-table.component.html',
  styleUrls: ['./provedor-table.component.css']
})
export class ProvedorTableComponent implements OnInit {

  show: boolean
  email: any

  @Output() closeForm: EventEmitter<any> = new EventEmitter();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.provedores().subscribe(resposta => {
      this.email = resposta 
      console.log(resposta)
      this.show = true
    }, error => {
      console.log(error)
    })
  }

  cancel(){
    this.closeForm.emit(true)
  }

}
