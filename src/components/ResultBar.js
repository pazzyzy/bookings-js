import React from 'react'
import Grid from '@mui/material/Grid'

const ResultBar = ({ cityFrom, cityTo, arrivalDate, way }) => {
  // console.log('______________', way)
  if (!way) {
    return (
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
        p={2}
        sx={{ border: '1px solid grey' }}
      >
        <Grid item xs={12}>
          <h3>ResultBar</h3>
          <>Select cities and date</>
        </Grid>
      </Grid>
    )
  }
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={1}
      p={2}
      sx={{ border: '1px solid grey' }}
    >
      <Grid item xs={12}>
        <h3>ResultBar</h3>
      </Grid>
      <Grid>
        {/* From{' '}
        <h4>
          {cityFrom} <br />
        </h4>
        to <h4>{cityTo}</h4> */}
        INFO flight_id:
        <Grid>
          {' '}
          {way.map((way, i) => {
            return (
              <Grid value={way} key={i}>
                {way.flight_id}
              </Grid>
            )
          })}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ResultBar
