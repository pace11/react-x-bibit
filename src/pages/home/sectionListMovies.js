import React from 'react'
import styled from 'styled-components'
import Section from '../../components/section'
import Card from '../../components/card'
import Shimmer from '../../components/shimmer'

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(min-content, max-content);
  grid-gap: 10px;
`

export default function SectionListMovies({
  list,
  handleClickSearch,
  handleClickImage,
  handleClickTitle,
}) {
  return (
    <React.Fragment>
      <Section
        title="List Movies"
        searchable
        onClickSearch={handleClickSearch}
      >
        <ContentWrapper>
          {list && list.isLoading ? (
            <Shimmer type="card-movies" number={3} />
          ) : (
            list.data.map((item, idx) => (
              <Card
                key={String(idx)}
                year={item.Year}
                imgUrl={item.Poster}
                title={item.Title}
                type={item.Type}
                handleClickImage={() => handleClickImage(idx)}
                handleClickTitle={() => handleClickTitle(item.imdbID)}
              />
            ))
          )}
        </ContentWrapper>
      </Section>
    </React.Fragment>
  )
}
