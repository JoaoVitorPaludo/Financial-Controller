export type Token = string | null;

export interface IProfile {
  id: string;
  nome: string;
}

export interface IAuthStates {
  isAuthenticated: boolean;
  token: Token;
  profile?: IProfile;
}
export interface IAuthStore extends IAuthStates {
  setToken: (token: Token) => void;
  clearStore: () => void;
}
