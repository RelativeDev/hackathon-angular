import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { HeaderComponent } from './components/header/header.component';
import { UserListComponent } from './components/userList/user-list.component';
import { UserService } from './services/user.service';
import { UserUpdateComponent } from './components/user-update/user-update.component'
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {InputMaskModule} from 'primeng/inputmask';
import {PasswordModule} from 'primeng/password';
import { FormsModule } from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import { UserDeleteComponent } from './components/user-delete/user-delete.component';
import {CardModule} from 'primeng/card';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { MessageService } from 'primeng/api';
import {DropdownModule} from 'primeng/dropdown';
import {AccordionModule} from 'primeng/accordion';
import {FieldsetModule} from 'primeng/fieldset';
import { ProvedorTableComponent } from './components/provedor-table/provedor-table.component';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserListComponent,
    UserUpdateComponent,
    UserDeleteComponent,
    UserCreateComponent,
    ProvedorTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ButtonModule,
    SidebarModule,
    MenubarModule,
    TableModule,
    InputTextModule,
    CalendarModule,
    InputMaskModule,
    PasswordModule,
    FormsModule,
    ToastModule,
    CardModule,
    MessagesModule,
    MessageModule,
    DropdownModule,
    AccordionModule,
    FieldsetModule,
    ReactiveFormsModule
  ],
  providers: [UserService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
