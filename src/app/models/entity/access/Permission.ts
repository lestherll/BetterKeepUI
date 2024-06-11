import { PermissionType } from './PermissionType';

export class Permission {
  private email: string;
  private permissionType: PermissionType;

  constructor(email: string, permissionType: PermissionType) {
    this.email = email;
    this.permissionType = permissionType;
  }

  getEmail(): string {
    return this.email;
  }

  setEmail(email: string): void {
    this.email = email;
  }

  getpermissionType(): PermissionType {
    return this.permissionType;
  }

  setpermissionType(permissionType: PermissionType): void {
    this.permissionType = permissionType;
  }
}
