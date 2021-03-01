import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledMediaScreen = styled.div`
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (min-width: 1024px) {
    width: 425px;
  }
`

export default function BodyComponent({ children }) {
  return (
    <StyledContainer>
      <StyledMediaScreen>{children}</StyledMediaScreen>
    </StyledContainer>
  )
}
