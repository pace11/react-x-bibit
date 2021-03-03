import React from 'react'
import styled from 'styled-components'
import theme from '../common/theme'

const StyledCard = styled.div`
  height: auto;
`

const CardImage = styled.div`
  height: 450px;
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
  margin: 10px 0;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 19px;
  color: ${theme.colors.grey1};
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

const Detail = styled.div`
  margin: 5px 0;
  div {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    padding: 5px;
    border-radius: 5px;
    span:first-child {
      color: ${theme.colors.black};
    }
    span:last-child {
      color: ${theme.colors.gray4};
      width: 50%;
      text-align: right;
      p {
        margin: 0;
      }
    }
  }
  div:nth-child(odd) {
    background: ${theme.colors.white2};
  }
`

/**
 *
 * @param {Object, Array} props.list
 */
export default function CardDetail({ list }) {
  return (
    <StyledCard data-testid="card-detail">
      <CardImage>
        <img alt="img-poster-movie" src={`${list.data.Poster}`} />
      </CardImage>
      <CardTitle>{list.data.Title}</CardTitle>
      <Detail>
        <div>
          <span>Director</span>
          <span>{list.data.Director}</span>
        </div>
        <div>
          <span>Genre</span>
          <span>{list.data.Genre}</span>
        </div>
        <div>
          <span>Year</span>
          <span>{list.data.Year}</span>
        </div>
        <div>
          <span>Released</span>
          <span>{list.data.Released}</span>
        </div>
        <div>
          <span>Plot</span>
          <span>{list.data.Plot}</span>
        </div>
        <div>
          <span>Languange</span>
          <span>{list.data.Language}</span>
        </div>
        <div>
          <span>Metascore</span>
          <span>{list.data.Metascore}</span>
        </div>
        <div>
          <span>IMDB Rating</span>
          <span>{list.data.imdbRating}</span>
        </div>
        <div>
          <span>IMDB Votes</span>
          <span>{list.data.imdbVotes}</span>
        </div>
        <div>
          <span>Rating</span>
          <span>
            {list.data.Ratings &&
              list.data.Ratings.map((item, idx) => (
                <p
                  key={String(idx)}
                >{`${item.Source} (${item.Value})`}</p>
              ))}
          </span>
        </div>
      </Detail>
    </StyledCard>
  )
}
