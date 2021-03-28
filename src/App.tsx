import * as React from 'react';
import { routes, IRoute } from './routes';
import { Route, Switch } from 'react-router-dom';
import { PageNotFound } from '@pages';

export default function App() {
  return (
    <div className='container'>

      <Switch>
        {routes.map(({ path, exact, component: C }: IRoute) => (
          <Route key={path} path={path} exact={exact} render={(props) => (
            <C {...props} />
          )} />
        ))}

        <Route path='*'>
          <PageNotFound />
        </Route>
        
      </Switch>
    </div>
  )
}