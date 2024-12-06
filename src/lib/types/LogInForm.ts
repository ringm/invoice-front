import { User } from "./User";

export type LogInFormType = Pick<User, "email" | "password">;

export interface LogInErrors {
  errors: {
    email?: string[];
    password?: string[];
    unauthorized?: string;
    server?: string;
  };
}
