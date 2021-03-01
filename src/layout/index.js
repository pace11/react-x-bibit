import React from 'react'
import theme from '../components/common/theme'
import styled from 'styled-components'
import Header from '../components/header'
import Navigation from '../components/navigation'

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: ${theme.colors.white};
  box-sizing: border-box;
`

const Content = styled.div`
  height: calc(100vh - 140px);
  overflow: hidden scroll;
  padding: 0 0 30px 0;
`
/**
 *
 * @param {String, <any>} props.children
 */
export default function Layout({ children }) {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
      <Navigation />
    </Container>
  )
}
