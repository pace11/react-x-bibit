import React from 'react'
import theme from '../common/theme'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background: ${theme.colors.green};
  color: ${theme.colors.white};
  box-sixing: border-box;
  img {
    width: 35px;
  }
  span {
    margin: 0 0 0 10px;
    font-weight: bold;
    font-size: 18px;
  }
  z-index: 999;
`

export default function Header() {
  return (
    <Container data-testid="header">
      <img
        src={require('../../assets/bibit-movie-white.png').default}
        alt="img-header"
      />
      <span>BIBIT MOVIE</span>
    </Container>
  )
}
