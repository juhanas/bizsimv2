export type LoginFormProps = {
  username: string;
  password: string;
  changedInput: boolean;
  loginUnderway: boolean;
  rememberMe: boolean;
  loginError: LoginError;
  handleUsernameChange: (event: any) => void;
  handlePasswordChange: (event: any) => void;
  handleSubmit: (event: any) => void;
}

type Token = {
  jwtToken: string;
  payload: {
    authTime: number;
    expires: number;
    tokenUse: string;
  };
}

type SignInUserSession = {
  accessToken: Token;
  idToken: Token;
}

export type LoginDetails = {
  username: string;
  signInUserSession: SignInUserSession;
} | null

export type LoginError = {
  code: string;
  name: string;
  message: string;
} | null
