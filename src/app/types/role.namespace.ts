export namespace Role {
  export const Admin = 'Admin';
  export const User = 'User';
  export const Guest = 'Guest';
}

export type RoleType = typeof Role.Admin | typeof Role.User | typeof Role.Guest;
