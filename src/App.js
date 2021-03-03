import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import routes from './routes'
import StyledBody from './styled-body'

function App() {
  return (
    <StyledBody data-testid="body-wrapper">
      <Router>
        {routes.map((route, idx) => (
          <Route
            key={String(idx)}
            path={route.path}
            exact={route.exact}
            component={(props) => <route.component {...props} />}
          />
        ))}
      </Router>
    </StyledBody>
  )
}

export default App
