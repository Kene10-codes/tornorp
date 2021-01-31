import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
// import ErrorBoundary from './pages/error/ErrorBoundary'
import './App.css';

const Home = React.lazy(() => import('./pages/home/Home.jsx'))
const LoginPage = React.lazy(() => import('./pages/login/LoginPage'))
const SignupPage = React.lazy(() => import('./pages/signup/SignupPage'))

function App() {
  
  return (
    // <ErrorBoundary>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path='/'>
                 <Home />
              </Route>
               <Route path='/SignupPage'>
                  <SignupPage  />
               </Route>
               <Route path='/LoginPage'>
                 <LoginPage />
               </Route>
            </Switch>
          </Suspense>
        </Router>
    // </ErrorBoundary>
  )
}

export default App;
