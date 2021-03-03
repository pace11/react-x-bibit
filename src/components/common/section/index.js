import React from 'react'
import styled from 'styled-components'
import theme from '../theme'

const Container = styled.div`
  height: auto;
  border: 1px solid ${theme.colors.gray5};
  background: #fff;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
`

const Header = styled.div`
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  outline: none;
  span:hover {
    cursor: pointer;
  }
  margin: 0 0 20px 0;
`

const Body = styled.div`
  height: auto;
`

const TitleSection = styled.p`
  position: relative;
  margin: 0 5px;
  font-size: 20px;
  font-weight: 600;
  z-index: 0;
  color: ${theme.colors.black};
  &:before {
    position: absolute;
    content: '';
    width: 100%;
    height: 10px;
    background: ${theme.colors.green};
    bottom: 0;
    border-radius: 10px;
    z-index: -1;
    opacity: 0.6;
  }
`

const IconSearch = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#949494"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
)

/**
 *
 * @param {String, <any>} props.children
 */
export default function Section({
  title,
  children,
  searchable,
  onClickSearch,
}) {
  return (
    <Container>
      <Header>
        <TitleSection>{title}</TitleSection>
        {searchable && (
          <span onClick={onClickSearch}>
            <IconSearch />
          </span>
        )}
      </Header>
      <Body>{children}</Body>
    </Container>
  )
}
