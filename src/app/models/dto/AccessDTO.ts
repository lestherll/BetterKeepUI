import { Permission } from '../entity/access/Permission';

export interface AccessDTO {
  // uuid
  accessId: string;
  noteId?: string;
  owner?: string;

  permissions?: Permission[];
}
