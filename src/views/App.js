import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/Default/NavBar'
import store from '../store.js/store'
import { Provider } from 'react-redux'
import routes from '../routes';
import Footer from './components/Default/Footer'

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <NavBar />
        <Switch>
          {routes.map(route => (
            <Route path={route.path}  key={route.id} >
              {route.component}
            </Route>
          ))}
        </Switch>
        <Footer />
      </Provider>
    </Router>
  )
}



export default App
