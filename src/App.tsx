import * as React from 'react';
import { routes, IRoute } from './routes';
import { Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <div className='container'>

      <div className="title">App Page</div>

      <Switch>
        {routes.map(({ path, exact, component: C }: IRoute) => (
          <Route key={path} path={path} exact={exact} render={(props) => (
            <C {...props} />
          )} />
        ))}
      </Switch>
    </div>
  )
}