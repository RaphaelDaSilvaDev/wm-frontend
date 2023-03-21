export interface ICategoryRequest {
  id: string;
  name: string;
}

export interface ICategoryManager {
  id: string;
  edit: JSX.Element;
  name: JSX.Element;
  empty: JSX.Element;
}
