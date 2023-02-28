export interface IUsersRequest {
  id: string;
  name: string | null;
  username: string | null;
  permission: string | null;
  avatar: string | null;
  status: boolean;
  createdAt: string;
}

export interface IManagerShowUser {
  id: string;
  name: JSX.Element;
  username: JSX.Element;
  status: JSX.Element;
  status_value: boolean;
  createdAt: JSX.Element;
}
