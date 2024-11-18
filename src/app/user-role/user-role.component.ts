import { Component } from '@angular/core';
import { UserRoleType, UserRole } from '../types/role.class';
import { RoleType, Role } from '../types/role.namespace';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-role',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-role.component.html',
  styleUrl: './user-role.component.scss',
})
export class UserRoleComponent {
  role: RoleType = Role.User;
  userRoles: UserRoleType[] = [UserRole.Admin, UserRole.User, UserRole.Guest];

  setRole(newRole: RoleType) {
    this.role = newRole;
  }
}
