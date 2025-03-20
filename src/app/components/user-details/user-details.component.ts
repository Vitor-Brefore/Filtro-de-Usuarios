import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-user-details',
  standalone: false,

  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent {
  @Input({ required: true }) user: IUser = {} as IUser;

  @Output() closeUserDetailsEmitt = new EventEmitter<boolean>();
  closeUserDetails() {
    this.closeUserDetailsEmitt.emit();
  }
}
