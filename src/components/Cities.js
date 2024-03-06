import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

export default function Cities({ cities, loading, getAirport, direction }) {
  const [city, setCity] = useState('')
  // const [aiport, setAirport] = useState('')
  const handleChange = (event) => {
    setCity(event.target.value)
    getAirport(event.target.value)
  }

  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <Box sx={{ minWidth: 120, maxWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="CityFrom-label">{direction}</InputLabel>
        <Select
          defaultValue={null}
          labelId="city-from-label"
          id="city-from"
          value={city}
          label="CityFrom"
          onChange={handleChange}
        >
          {cities.map((city, i) => (
            <MenuItem value={city.airport_code} key={i}>
              {city.city.en}
              {'\u00A0'}
              {city.airport_code}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}
