import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import UserContext from './context/user'
import ProtectedRoute from './helpers/protected-routes'
import IsUserLoggedIn from './helpers/protected-routes'
import useAuthListener from './hooks/use-auth-listener'


const Login = React.lazy(() => import('./pages/login'))
const SignUp = React.lazy(() => import('./pages/signup'))
const NotFound = React.lazy(() => import('./pages/notfound'))
const Dashboard = React.lazy(() => import('./pages/dashboard'))
const Profile = React.lazy(() => import('./pages/profile'))

export default function App() {
  const { user } = useAuthListener();
  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        <Suspense fallback={<p>Loading..</p>}>
          <Switch>
            {/* <IsUserLoggedIn user={user} loggedInPath={ROUTES.DASHBOARD} path={ROUTES.LOGIN}> */}
            <Route path={ROUTES.LOGIN} component={Login} />
            {/* </IsUserLoggedIn> */}
            {/* <IsUserLoggedIn user={user} loggedInPath={ROUTES.DASHBOARD} path={ROUTES.SIGN_UP}> */}
            <Route path={ROUTES.SIGN_UP} component={SignUp} />
            {/* </IsUserLoggedIn> */}
            <Route path={ROUTES.PROFILE} component={Profile}/>
            <ProtectedRoute user={user} path={ROUTES.DASHBOARD} exact>
              <Dashboard />
            </ProtectedRoute>
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}

