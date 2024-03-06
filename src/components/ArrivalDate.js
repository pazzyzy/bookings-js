import React, { useState, useEffect } from 'react'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import Box from '@mui/material/Box'
import dayjs from 'dayjs'

const ArrivalDate = ({ getDate }) => {
  const [date, setDate] = useState('')

  return (
    <Box sx={{ maxWidth: 200 }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker']}>
          <DatePicker
            label="Arrival date"
            value={date}
            onChange={(newDate) => {
              setDate(newDate)
              getDate(dayjs(newDate).format('YYYY-MM-DD HH:mm:ss'))
            }}
          />
        </DemoContainer>
      </LocalizationProvider>
    </Box>
  )
}

export default ArrivalDate
