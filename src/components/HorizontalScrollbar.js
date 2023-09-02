import React from 'react'
import { Box } from '@mui/material'

const HorizontalScrollbar = ({data}) => {
  return (
    <div>
         {data.map((item) => (
         <Box
         Key={item.id || item}
         itemID={item.id || item}
         title={item.id || item}>

         </Box>
         )
         )}
    </div>
  )
}

export default HorizontalScrollbar