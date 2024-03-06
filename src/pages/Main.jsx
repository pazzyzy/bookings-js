import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Grid from '@mui/material/Grid'
import { GET_AIRPORTS, GET_WAY } from '../utils/const'
import TravelBar from '../components/TravelBar'
import ResultBar from '../components/ResultBar'

const Main = () => {
  const [cities, setCities] = useState([])
  const [loading, setLoading] = useState(false)
  const [airportFrom, setAirportFrom] = useState(null)
  const [airportTo, setAirportTo] = useState(null)
  const [arrivalDate, setArrivalDate] = useState(null)
  const [buttonSearch, setButtonSearch] = useState(true)
  const [way, setWay] = useState(null)

  const getAirportFrom = (airport) => {
    setAirportFrom(airport)
  }

  const getAirportTo = (airport) => {
    setAirportTo(airport)
  }

  const getDate = (date) => {
    setArrivalDate(date)
  }

  const clickSearchBtn = () => {
    console.log('clicked')
    const getResultWay = async () => {
      const params = {
        offset: '0',
        limit: '10',
        departure_airport: airportFrom,
        arrival_airport: airportTo,
        // scheduled_arrival: '2017-09-14 00:00:00',
        scheduled_arrival: arrivalDate,
      }
      console.log('arrivalDate', arrivalDate)
      const res = await axios.get(GET_WAY, { params })
      setWay(res.data.objects)
      console.log('res', res.data.objects)
    }
    getResultWay()
  }

  useEffect(() => {
    if (airportFrom && airportTo && arrivalDate) {
      setButtonSearch(false)
    } else {
      setButtonSearch(true)
    }
  }, [airportFrom, airportTo, arrivalDate])

  useEffect(() => {
    const getCities = async () => {
      setLoading(true)
      const res = await axios.get(GET_AIRPORTS)
      setCities(res.data.objects)
      setLoading(false)
    }
    getCities()
  }, [])

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={1}
      p={2}
      my={1}
      display="flex"
      gap={1}
    >
      <Grid item xs={12}>
        <h1 className="text-3xl font-bold underline">Main page</h1>
      </Grid>
      <Grid item xs={12}>
        <TravelBar
          cities={cities}
          loading={loading}
          getAirportFrom={getAirportFrom}
          getAirportTo={getAirportTo}
          getDate={getDate}
          buttonSearch={buttonSearch}
          clickSearchBtn={clickSearchBtn}
        />
      </Grid>
      <Grid item xs={12}>
        <ResultBar
          cityFrom={airportFrom}
          cityTo={airportTo}
          arrivalDate={arrivalDate}
          way={way}
        />
      </Grid>
    </Grid>
  )
}

export default Main
