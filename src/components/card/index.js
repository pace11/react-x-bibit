import React from 'react'
import styled from 'styled-components'
import theme from '../../components/common/theme'

const StyledCard = styled.div`
  position: relative;
`

const CardImage = styled.div`
  height: 250px;
  cursor: pointer;
  box-sizing: border-box;
  background-color: ${theme.colors.grey3};
  border-radius: 5px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`

const CardTitle = styled.p`
  margin: 5px 0 0 0;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  color: ${theme.colors.grey1};
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

const CardMovieType = styled.p`
  margin: 0;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: ${theme.colors.grey1};
`

const CardLabelYear = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  padding: 5px;
  border-radius: 5px;
  background: ${theme.colors.green};
  color: ${theme.colors.white};
`

/**
 *
 * @param {Number} props.year
 * @param {String} props.imgUrl
 * @param {String} props.title
 * @param {String} props.type
 * @param {Function} props.handleClickImage
 * @param {Function} props.handleClickTitle
 */
export default function Card({
  year,
  imgUrl,
  title,
  type,
  handleClickImage,
  handleClickTitle,
}) {
  return (
    <StyledCard>
      {year && <CardLabelYear>Year: {year}</CardLabelYear>}
      <CardImage onClick={handleClickImage}>
        <img alt="img-poster-movie" src={`${imgUrl}`} />
      </CardImage>
      <CardTitle onClick={handleClickTitle}>{title}</CardTitle>
      <CardMovieType>{type}</CardMovieType>
    </StyledCard>
  )
}
