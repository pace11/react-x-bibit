import Axios from 'axios'

const urlApi = `https://www.omdbapi.com`
const apiKey = `bdd3cc38`

export const fetchMovies = async (params) => {
  try {
    const result = await Axios({
      method: 'GET',
      url: `${urlApi}?apiKey=${apiKey}&s=${params.search}&page=${params.page}`,
    })
    if (result.status !== 200) {
      return {
        data: null,
        status: result.status,
        statusText: result.statusText,
      }
    }
    return {
      data: result.data,
      status: result.status,
      statusText: result.statusText,
    }
  } catch (error) {
    return {
      data: null,
      status: error.status,
      statusText: error.statusText,
    }
  }
}

export const fetchMovieById = async (params) => {
  try {
    const result = await Axios({
      method: 'GET',
      url: `${urlApi}?apiKey=${apiKey}&i=${params.id}`,
    })
    if (result.status !== 200) {
      return {
        data: null,
        status: result.status,
        statusText: result.statusText,
      }
    }
    return {
      data: result.data,
      status: result.status,
      statusText: result.statusText,
    }
  } catch (error) {
    return {
      data: null,
      status: error.status,
      statusText: error.statusText,
    }
  }
}
