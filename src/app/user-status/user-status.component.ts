import { Component } from '@angular/core';
import { STATUS, StatusValues } from '../types/status.constant';
import { UserStatusType } from '../types/user-status.type';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-status',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-status.component.html',
  styleUrl: './user-status.component.scss',
})
export class UserStatusComponent {
  status: UserStatusType = 'Active';
  statusValues = Object.values(STATUS);

  setStatus(newStatus: StatusValues) {
    this.status = newStatus;
  }
}
