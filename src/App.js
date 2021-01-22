import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
// import ErrorBoundary from './pages/error/ErrorBoundary'
import './App.css';

const Home = React.lazy(() => import('./pages/home/Home'))
const LoginPage = React.lazy(() => import('./pages/login/LoginPage'))
const SignupPage = React.lazy(() => import('./pages/signup/SignupPage'))

function App() {
  
  return (
    // <ErrorBoundary>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Home exact path='/' component={Home} />
                <SignupPage path='/SignupPage' component={SignupPage} />
                <LoginPage path='/LoginPage' component={LoginPage} />
            </Switch>
          </Suspense>
        </Router>
    // </ErrorBoundary>
  )
}

export default App;
