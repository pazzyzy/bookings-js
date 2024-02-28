import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

// city.airport_code

// <ul className="list-group mb-2">
//   {cities.map((city, i) => (
//     <li className="list-group-item">{city.id}</li>
//   ))}
// </ul>

export default function Cities({ cities, loading, getCityFrom }) {
  const [city, setCity] = React.useState('')
  console.log('city = ', city)
  const handleChange = (event) => {
    setCity(event.target.value)
    getCityFrom(city)
  }

  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <Box sx={{ minWidth: 120, maxWidth: 190 }}>
      <FormControl fullWidth>
        <InputLabel id="CityFrom-label">From</InputLabel>
        <Select
          defaultValue={null}
          labelId="city-from-label"
          id="city-from"
          value={city}
          label="CityFrom"
          onChange={handleChange}
        >
          {cities.map((city, i) => (
            <MenuItem value={city.city.en} key={i}>
              {city.city.en}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}
