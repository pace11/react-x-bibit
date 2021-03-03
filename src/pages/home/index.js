import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Layout from '../../layout'
import ModalSearch from '../../components/modal-search'
import ModalPoster from '../../components/modal-poster'
import SectionListMovies from './sectionListMovies'
import { useSelector, useDispatch } from 'react-redux'
import {
  getListMovies,
  getListMoviesBySearch,
} from '../../store/actions'

function Home() {
  const history = useHistory()
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)
  const [showPoster, setShowPoster] = useState(false)
  const [page, setPage] = useState(1)
  const [moviePoster, setMoviePoster] = useState()
  const [pageMoviesSearch, setPageMoviesSearch] = useState(1)
  const [isLoadingSearch, setIsLoadingSearch] = useState(false)
  const [keyword, setKeyword] = useState()
  const movies = useSelector((state) => state.movies)
  const moviesBySearch = useSelector((state) => state.moviesBySearch)

  useEffect(() => {
    dispatch(getListMovies({ search: 'batman', page: 1 }))
  }, [dispatch])

  useEffect(() => {
    if (keyword) {
      dispatch(
        getListMoviesBySearch({ type: 'CLEAR_MOVIES_BY_SEARCH' }),
      )
      setIsLoadingSearch(true)
      const delayBounce = setTimeout(() => {
        if (keyword.length >= 3) {
          dispatch(
            getListMoviesBySearch({ search: keyword, page: 1 }),
          )
        } else {
          dispatch(
            getListMoviesBySearch({ type: 'CLEAR_MOVIES_BY_SEARCH' }),
          )
        }
        setIsLoadingSearch(false)
      }, 2000)
      return () => clearTimeout(delayBounce)
    } else {
      dispatch(
        getListMoviesBySearch({ type: 'CLEAR_MOVIES_BY_SEARCH' }),
      )
    }
  }, [keyword, dispatch])

  const HandleCloseModalSearch = () => {
    setShow((show) => !show)
    dispatch(
      getListMoviesBySearch({
        type: 'CLEAR_MOVIES_BY_SEARCH',
      }),
    )
  }

  const HandleScroll = (e, type) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop ===
      e.target.clientHeight
    if (bottom) {
      if (type === 'movies') {
        if (movies.data.length < movies.totalResult) {
          dispatch(
            getListMovies({ search: 'batman', page: page + 1 }),
          )
          setPage((page) => page + 1)
        }
      } else {
        if (moviesBySearch.data.length < moviesBySearch.totalResult) {
          dispatch(
            getListMoviesBySearch({
              search: keyword,
              page: pageMoviesSearch + 1,
            }),
          )
          setPageMoviesSearch(
            (pageMoviesSearch) => pageMoviesSearch + 1,
          )
        }
      }
    }
  }

  const HandleClickImage = (val) => {
    setShowPoster((showPoster) => !showPoster)
    setMoviePoster(movies.data[val].Poster)
  }

  const HandleClickTitle = (val) => {
    history.push({
      pathname: `/movie/${val}`,
    })
  }

  return (
    <Layout handleScroll={(e) => HandleScroll(e, 'movies')}>
      <SectionListMovies
        list={movies}
        handleClickSearch={() => setShow((show) => !show)}
        handleClickImage={(val) => HandleClickImage(val)}
        handleClickTitle={(val) => HandleClickTitle(val)}
      />
      <ModalPoster
        show={showPoster}
        imgUrl={moviePoster}
        onClick={() => setShowPoster((showPoster) => !showPoster)}
      />
      <ModalSearch
        show={show}
        onClick={() => HandleCloseModalSearch()}
        handleScroll={(e) => HandleScroll(e, 'search-movies')}
        isLoadingSearch={isLoadingSearch}
        onChange={(e) => setKeyword(e.target.value)}
        list={moviesBySearch}
      />
    </Layout>
  )
}

export default Home
