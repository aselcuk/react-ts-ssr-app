import * as React from 'react';
import { PageNotFound } from '@pages';
import { IRoute, routes } from './routes';
import { Route, Switch } from 'react-router-dom';
import 'normalize.css';
import './index.scss';

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
  );
}