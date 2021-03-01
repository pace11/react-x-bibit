import React from 'react'
import styled from 'styled-components'
import theme from '../common/theme'
import NavItem from '../../data/navigation-items'

const Container = styled.nav`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 50px;
  background: #ffffff;
  border-top: 1px solid ${theme.colors.gray5};
`

const Items = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 5px;
    color: ${(props) =>
      props.active ? theme.colors.green : theme.colors.gray4};
    transition: all 0.5s ease;
    border-radius: 5px;
    :hover {
      cursor: pointer;
      background: ${theme.colors.white2};
    }
  }
  span {
    font-size: 11px;
  }
`

export default function Navigation() {
  return (
    <Container>
      {NavItem.map((item, idx) => (
        <Items key={String(idx)} active={'/' === item.url}>
          <div>
            <item.icon />
            <span>{item.text}</span>
          </div>
        </Items>
      ))}
    </Container>
  )
}
