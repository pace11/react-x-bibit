import React from 'react'
import styled, { keyframes } from 'styled-components'
import Shimmer from '../shimmer'
import theme from '../../common/theme'

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
  width: 300px;
  max-height: 520px;
  background: transparent;
  padding: 20px;
  margin: 10% auto;
  border-radius: 10px;
  top: 0;
  left: 0;
  right: 0;
  -webkit-animation-name: ${animateZoom};
  -webkit-animation-duration: 0.4s;
  animation-name: ${animateZoom};
  animation-duration: 0.4s;
`

const ModalContent = styled.div`
  height: auto;
  overflow-y: scroll;
  scroll-padding-right: 50px;
  background: #ffffff;
  border-radius: 10px;
  border: 1px solid ${theme.colors.gray5};
  padding: 5px;
  input {
    width: 100%;
    box-sizing: border-box;
    border-radius: 5px;
    height: 40px;
    border: 1px solid ${theme.colors.gray5};
    color: ${theme.colors.gray};
    font-size: 18px;
    padding: 0 5px;
    :focus {
      outline: none;
      border: 1px solid ${theme.colors.green};
    }
    :placeholder {
      color: ${theme.colors.gray5};
    }
  }
  span {
    font-size: 12px;
  }
`

const ListMovies = styled.div`
  max-height: 300px;
  overflow-y: scroll;
  div {
    height: auto;
    padding: 0 10px;
    margin: 5px 0;
    border-radius: 5px;
    p {
      margin: 0;
    }
    p:first-child {
      font-size: 14px;
      font-weight: 600;
    }
    p:last-child {
      font-size: 12px;
      span {
        background: ${theme.colors.green};
        color: ${theme.colors.white};
        padding: 0 2px;
        border-radius: 5px;
        font-weight: 600;
      }
    }
    :hover {
      cursor: pointer;
      background: ${theme.colors.white};
    }
  }
`

/**
 *
 * @param {Boolean} props.show
 * @param {Function} props.onClick
 * @param {String} props.title
 * @param {String <any>} props.children
 */
export default function Modal({
  show,
  value,
  isLoadingSearch,
  onClick,
  onChange,
  list,
}) {
  console.log('data dalem items', list)
  if (!show) {
    return null
  } else {
    return (
      <React.Fragment>
        <StyledFilterBackground onClick={(e) => onClick(e)} />
        <ContainerModal>
          <ModalContent>
            <input
              value={value}
              placeholder="fill in at least 5 words ..."
              onChange={onChange}
            />
            {isLoadingSearch ? (
              <Shimmer type="card-search" number={1} />
            ) : (
              list &&
              !list.isLoading && (
                <ListMovies>
                  {list.data && list.data.Search ? (
                    list.data.Search.map((item, idx) => (
                      <div key={String(idx)}>
                        <p>{item.Title}</p>
                        <p>
                          {item.Type} - <span>{item.Year}</span>
                        </p>
                      </div>
                    ))
                  ) : (
                    <span>Movies not found</span>
                  )}
                </ListMovies>
              )
            )}
          </ModalContent>
        </ContainerModal>
      </React.Fragment>
    )
  }
}
