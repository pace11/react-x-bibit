import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../../layout'
import Section from '../../components/section'
import CardDetail from '../../components/card-detail'
import Shimmer from '../../components/shimmer'
import { useSelector, useDispatch } from 'react-redux'
import { getListMovieById } from '../../store/actions'

export default function Detail() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const moviesById = useSelector((state) => state.moviesById)

  useEffect(() => {
    dispatch(getListMovieById({ id: id }))
  }, [dispatch, id])

  return (
    <Layout>
      <Section title="Detail Movie">
        {moviesById && moviesById.data ? (
          <CardDetail list={moviesById && moviesById} />
        ) : (
          <Shimmer type="card-movies" number={1} />
        )}
      </Section>
    </Layout>
  )
}
