export interface IUserRequest {
  id: string;
  name: string;
  username: string;
  avatar: string | null;
  status: boolean;
}

export interface IUserUpdate {
  id?: string;
  username?: string;
  avatar?: string | null;
  password?: string;
}

export interface IUserCreate {
  name: string;
  password: string;
  username: string;
}
