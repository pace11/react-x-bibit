import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Section from '../../components/common/section'
import ModalSearch from '../../components/common/modal-search'
import Card from '../../components/card'
import { useSelector, useDispatch } from 'react-redux'
import {
  getListMovies,
  getListMoviesBySearch,
} from '../../store/actions'

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(min-content, max-content);
  grid-gap: 10px;
`

export default function Home() {
  const [show, setShow] = useState(false)
  const [isLoadingSearch, setIsLoadingSearch] = useState(false)
  const dispatch = useDispatch()
  const movies = useSelector((state) => state.movies)
  const moviesBySearch = useSelector((state) => state.moviesBySearch)

  useEffect(() => {
    dispatch(getListMovies({ search: 'batman', page: 1 }))
  }, [dispatch])

  const HandleChangeSearch = (val) => {
    if (val.length >= 3) {
      setIsLoadingSearch(true)
      setTimeout(() => {
        setIsLoadingSearch(false)
        dispatch(
          getListMoviesBySearch({
            search: val,
            page: 1,
          }),
        )
      }, 2000)
    }
    dispatch(
      getListMoviesBySearch({
        search: '',
      }),
    )
  }

  const HandleCloseModalSearch = () => {
    setShow((show) => !show)
    dispatch(
      getListMoviesBySearch({
        search: '',
      }),
    )
  }

  console.log('datanya ===>', isLoadingSearch)

  return (
    <React.Fragment>
      <Section
        title="List Movies"
        searchable
        onClickSearch={() => setShow((show) => !show)}
      >
        <ContentWrapper>
          {movies && movies.isLoading && !movies.data ? (
            <p>Loading</p>
          ) : (
            movies.data &&
            movies.data.Search.map((item, idx) => (
              <Card
                key={String(idx)}
                year={item.Year}
                imgUrl={item.Poster}
                title={item.Title}
                type={item.Type}
              />
            ))
          )}
        </ContentWrapper>
      </Section>
      <ModalSearch
        show={show}
        onClick={() => HandleCloseModalSearch()}
        isLoadingSearch={isLoadingSearch}
        onChange={(e) => HandleChangeSearch(e.target.value)}
        list={moviesBySearch}
      />
    </React.Fragment>
  )
}
