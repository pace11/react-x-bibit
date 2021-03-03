import React from 'react'
import styled from 'styled-components'
import theme from '../common/theme'

const ContainerButton = styled.button`
  width: ${(props) => (props.block ? '100%' : 'auto')};
  heigh: auto;
  padding: 5px 10px;
  border-radius: 5px;
  background: ${(props) =>
    props.bgColor ? props.bgColor : theme.colors.green};
  color: ${theme.colors.white};
  letter-spacing: 1px;
  outline: none;
  border: 0px;
  :active {
    opacity: 0.6;
  }
  cursor: pointer;
  :disabled {
    opacity: 0.5;
  }
`

/**
 *
 * @param {Boolean} props.block
 * @param {String} props.disabled
 * @param {Function} props.onClick
 * @param {String, <any>} props.children
 *
 */
export default function Button({
  block,
  disabled,
  onClick,
  children,
}) {
  return (
    <ContainerButton
      data-testid="button"
      block={block}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </ContainerButton>
  )
}

Button.defaultProps = {
  disabled: false,
}
