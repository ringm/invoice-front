import { User } from "./User";

export type LogInFormType = Pick<User, "email" | "password">;
