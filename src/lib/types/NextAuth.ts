export interface CustomUser {
  id: string;
  email: string;
  name?: string | null;
  token: string; // Backend's access token
}

export interface CustomJWT {
  id: string;
  accessToken: string;
}

export interface CustomSession {
  user: {
    id: string;
    email: string;
    name?: string | null;
  };
  accessToken: string;
}
