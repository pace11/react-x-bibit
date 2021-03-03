import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import routes from './routes'
import StyledBody from './styled-body'

export default function App() {
  return (
    <StyledBody>
      <Router>
        {routes.map((route, idx) => (
          <Route
            key={String(idx)}
            path={route.path}
            exact={route.exact}
            component={(props) => (
              <route.layout>
                <route.component {...props} />
              </route.layout>
            )}
          />
        ))}
      </Router>
    </StyledBody>
  )
}
