import { Component } from '@angular/core';
import { UserRoleComponent } from './user-role/user-role.component';
import { UserStatusComponent } from './user-status/user-status.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserRoleComponent, UserStatusComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'enum-alternatives-app';
}
