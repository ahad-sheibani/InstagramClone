import React,  {  Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import UserContext from './context/user'
import useAuthListener from './hooks/use-auth-listener'


const Login = React.lazy(() => import('./pages/login'))
const SignUp = React.lazy(() => import('./pages/signup'))
const NotFound = React.lazy(() => import('./pages/notfound'))
const Dashboard = React.lazy(() => import('./pages/dashboard'))

export default function App() {
  const {user} = useAuthListener();
  return (
    <UserContext.Provider value={{user}}>
    <Router>
      <Suspense fallback={<p>Loading..</p>}>
        <Switch>
          <Route path={ROUTES.LOGIN} component={Login} />
          <Route path={ROUTES.SIGN_UP} component={SignUp} />
          <Route path={ROUTES.DASHBOARD} component={Dashboard} />
          <Route  component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
    </UserContext.Provider>
  );
}

