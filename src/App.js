import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import routes from './routes'
import StyledBody from './styled-body'
import SplashScreen from './splash-screen'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading((loading) => !loading)
    }, 3000)
  }, [])

  if (loading) {
    return <SplashScreen />
  }
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
