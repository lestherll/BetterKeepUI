export class User {
  email: string;
  firstName: string;
  lastName: string;
  accessToken: string;
  refreshToken: string;
  state: string;
  emailVerified: boolean;
  picture: string;

  constructor(email: string, 
      firstName: string,
      lastName: string,
      accessToken: string,
      refreshToken: string,
      state: string,
      emailVerified: boolean,
      picture: string) {
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
    this.state = state;
    this.emailVerified = emailVerified;
    this.picture = picture;
  }
}