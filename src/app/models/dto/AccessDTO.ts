export interface AccessDTO {
  // uuid
  accessId: string;
  noteId?: string;
  owner?: string;
  // list of user ids
  permissions?: string[];
}
