export interface AccessDTO {
  // uuid
  accessId: string;
  noteId?: string;
  owner?: string;
  // sets of user ids
  permissions?: string[];
}
