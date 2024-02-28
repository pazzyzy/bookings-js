import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { GET_AIRPORTS } from '../utils/const'
import Cities from '../components/Cities'

const Main = () => {
  const [cities, setCities] = useState([])
  const [loading, setLoading] = useState(false)
  const [cityFrom, setCityFrom] = useState(null)

  console.log('cityFrom', cityFrom)

  const getCityFrom = (city) => {
    setCityFrom(city)
  }

  useEffect(() => {
    const getCities = async () => {
      setLoading(true)
      // const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      const res = await axios.get(GET_AIRPORTS)
      setCities(res.data.objects)
      setLoading(false)
    }

    getCities()
  }, [])

  return (
    <>
      <h2 className="text-3xl font-bold underline">Main page</h2>
      <div className="container mt-5">
        <h1 className="text-primary">Travel easy</h1>
        <Cities cities={cities} loading={loading} getCityFrom={getCityFrom} />
      </div>
    </>
  )
}

export default Main
