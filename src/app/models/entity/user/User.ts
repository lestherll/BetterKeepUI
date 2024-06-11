import { UserDTO } from '../../dto/UserDTO';

export class User {
  private _email: string;
  private _username: string;
  private _firstName: string;
  private _lastName: string;
  private _emailVerified: boolean;
  private _picture: string;

  private _originalData: Partial<UserDTO> = {};

  // use the dto response from the backend to create the new user only
  constructor(options: UserDTO) {
    this._email = options.email;
    this._username = options.username || '';
    this._firstName = options.firstName || '';
    this._lastName = options.lastName || '';
    this._emailVerified = options.emailVerified ?? false;
    this._picture = options.picture || '';

    // store the original data for patch
    this._originalData = { ...options };
  }

  // get the patch payload
  getPatchPayload(): Partial<UserDTO> {
    const payload: Partial<UserDTO> = {};
    if (this._username !== this._originalData.username) {
      payload.username = this._username;
    }
    if (this._firstName !== this._originalData.firstName) {
      payload.firstName = this._firstName;
    }
    if (this._lastName !== this._originalData.lastName) {
      payload.lastName = this._lastName;
    }
    if (this._picture !== this._originalData.picture) {
      payload.picture = this._picture;
    }
    return payload;
  }

  // recieve the response to update (able for both patch and put)
  updateOriginalData(newData: Partial<UserDTO>): void {
    Object.assign(this._originalData, newData);
  }

  //getter and setter
  public get email(): string {
    return this._email;
  }

  public get username(): string {
    return this._username;
  }
  public set username(value: string) {
    if (!value) {
      throw new Error("Username cannot be null or empty");
    }
    this._username = value;
  }

  public get firstName(): string {
    return this._firstName;
  }
  public set firstName(value: string) {
    if (!value) {
      throw new Error("First name cannot be null or empty");
    }
    this._firstName = value;
  }

  public get lastName(): string {
    return this._lastName;
  }
  public set lastName(value: string) {
    if (!value) {
      throw new Error("Last name cannot be null or empty");
    }
    this._lastName = value;
  }

  public get emailVerified(): boolean {
    return this._emailVerified;
  }
  public set emailVerified(value: boolean) {
    if (!value) {
      throw new Error("Email verified cannot be null or empty");
    }
    this._emailVerified = value;
  }

  public get picture(): string {
    return this._picture;
  }
  public set picture(value: string) {
    this._picture = value;
  }
}
