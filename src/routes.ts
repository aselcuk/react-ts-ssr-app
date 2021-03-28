import { Home } from "@pages"


export type IRoute = {
  path: string;
  exact?: boolean;
  component: (props) => JSX.Element
}

export const routes: IRoute[] = [
  {
    path: '/',
    exact: true,
    component: Home,
  }
]