import React, { useState, useEffect } from 'react'
import Cities from './Cities'
import ArrivalDate from './ArrivalDate'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

const TravelBar = ({
  cities,
  loading,
  getAirportFrom,
  getAirportTo,
  getDate,
  buttonSearch,
  clickSearchBtn,
}) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={1}
      p={1}
      sx={{ border: '1px solid grey' }}
    >
      <Grid item xs={12}>
        <h3>Travel easy</h3>
      </Grid>
      <Grid item md={3}>
        <Cities
          cities={cities}
          loading={loading}
          getAirport={getAirportFrom}
          direction={'From'}
        />
      </Grid>
      <Grid item md={3}>
        <Cities
          cities={cities}
          loading={loading}
          getAirport={getAirportTo}
          direction={'To'}
        />
      </Grid>
      <Grid item md={4}>
        <ArrivalDate getDate={getDate} />
      </Grid>
      <Grid item md={2}>
        <Button
          variant="outlined"
          onClick={() => {
            clickSearchBtn()
          }}
          disabled={buttonSearch}
        >
          Search
        </Button>
      </Grid>
    </Grid>
  )
}

export default TravelBar
