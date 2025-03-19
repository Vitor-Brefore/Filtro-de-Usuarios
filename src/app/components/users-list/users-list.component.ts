import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-users-list',
  standalone: false,

  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css',
})
export class UsersListComponent {
  @Input({ required: true }) usersList: IUser[] = [];

  columns = [
    { property: 'nome', label: 'Nome' },
    { property: 'dataCadastro', label: 'Data de Cadastro', type: 'date' },
    {
      property: 'ativo',
      label: 'Status',
      type: 'boolean',
      boolean: { trueLabel: 'Ativo', falseLabel: 'Inativo' },
    },
  ];

  actions = [
    {
      label: 'Detalhes',
      icon: 'an-fill an-info',
      action: (user: IUser) => this.onUserSelected(user),
    },
  ];

  @Output('userSelected') userSelectedEmitt = new EventEmitter<IUser>();
  onUserSelected(user: IUser) {
    this.userSelectedEmitt.emit(user);
  }
}
