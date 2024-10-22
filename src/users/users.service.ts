import { OkPacket } from "mysql";
import { execute } from "../config/database";
import { User } from "./user";
import { userQueries } from "./users.queries";

export const getAllUsers = async () => {
  return execute<User[]>(userQueries.readUsers, []);
}

export const getUserById = async (id: number) => {
  return execute<User[]>(userQueries.readUserById, [id]);
}
export const createUser = async (user: User) => {
  return execute<OkPacket>(userQueries.createUser,
    [user.first_name,user.email,user.username,user.password]);
};

export const updateUser = async (userId: number, user: User) => {
  return execute<OkPacket>(userQueries.updateUser,
      [user.first_name, user.email, user.username, user.password, userId]);
};
export const deleteUser = async (userId: number) => {
  return execute<OkPacket>(userQueries.deleteUser, [userId]);
};

