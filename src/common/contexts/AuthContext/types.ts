export interface IAuthContext {
  user: IUser;
  isReady: boolean;
  isAuthenticated: boolean;
}

export interface IUser {
  name: string;
  userId: string;
}
