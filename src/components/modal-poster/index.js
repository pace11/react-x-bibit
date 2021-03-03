import React from 'react'
import styled, { keyframes } from 'styled-components'
import theme from '../common/theme'

const animateZoom = keyframes`
from {
    transform: scale(0.1);
  }
  to {
    transform: scale(1);
  }
`

const StyledFilterBackground = styled.div`
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 998;
  box-sizing: border-box;
`

const ContainerModal = styled.div`
  position: fixed;
  z-index: 999;
  width: 250px;
  height: auto;
  background: transparent;
  padding: 20px;
  margin: 10% auto;
  top: 0;
  left: 0;
  right: 0;
  -webkit-animation-name: ${animateZoom};
  -webkit-animation-duration: 0.4s;
  animation-name: ${animateZoom};
  animation-duration: 0.4s;
`

const ModalContent = styled.div`
  height: 350px;
  overflow: hidden;
  border-radius: 5px;
  border: 1px solid ${theme.colors.green};
  background: ${theme.colors.white3};
  img {
    width: 100%;
    height: 100%;
  }
`

/**
 *
 * @param {Boolean} props.show
 * @param {String} props.imgUrl
 * @param {Function} props.onClick
 */
export default function Modal({ show, imgUrl, onClick }) {
  if (!show) {
    return null
  } else {
    return (
      <React.Fragment>
        <StyledFilterBackground onClick={() => onClick()} />
        <ContainerModal>
          <ModalContent>
            <img src={imgUrl} alt="img-poster-popup" />
          </ModalContent>
        </ContainerModal>
      </React.Fragment>
    )
  }
}
