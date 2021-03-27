import About from './pages/About'
import Home from './pages/Home'

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
  },
  {
    path: '/about',
    component: About,
  }
]