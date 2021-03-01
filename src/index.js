import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import StyledBody from './styled-body'

ReactDOM.render(
  <React.StrictMode>
    <StyledBody>
      <App />
    </StyledBody>
  </React.StrictMode>,
  document.getElementById('root'),
)
