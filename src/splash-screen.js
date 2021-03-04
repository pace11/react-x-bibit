import React from 'react'
import styled from 'styled-components'
import theme from './components/common/theme'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.white2};
  flex-direction: column;
  img {
    width: 200px;
  }
`

export default function SplashScreen() {
  return (
    <Container>
      <img
        src={require('./assets/bibit-movie-splash.png').default}
        alt="logo"
      />
    </Container>
  )
}
