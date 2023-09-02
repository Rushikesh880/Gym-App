import React from 'react'
import { useEffect , useState} from 'react';
import {Box , Button , Stack , TextField, Typography} from '@mui/material'

import { exerciseOption, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';
const SearchExercises = () => {

  const [search , setSearch] = useState ('')
  const [exercise , setExercise] = useState([])
  const [bodypart, setBodyPart] = useState ([])

  useEffect(() =>{
              const fetchExerciseData = async () => {
                const bodyPartData = await fetchData ('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOption)
              
                setBodyPart(['all', ...bodyPartData])
              }
              fetchExerciseData();
  },[]) 

  const handleSearch = async() => {
    if(search) {
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOption);
    
       const SearchedExercises = exerciseData.filter (
        exercise => exercise.name.toLowerCase().include(search)
         || exercise.target.toLowerCase().include(search)
         || exercise.target.toLowerCase().include(search)
         || exercise.bodyPart.toLowerCase().include(search)
      );

      setSearch ('');
      setExercise (SearchedExercises);

       
    }

  }

  return (
   <Stack alignItems='center' mt='37px' justifyContent='center' p='20px' >
     <Typography fontWeight={700} sx={{
      fontSize: { lg: '44px', xs : '30px' ,} 
     }} mb='50px' textAlign='center'>
           Awesome Exercises you <br /> 
           should know
     </Typography>
     <Box position='realative' mb='72px'>
      <TextField 
      sx = {{
        imput: {fontWeight: '700',
         border: 'none' ,
        borderRadius: '4px'},
        width: {lg:'800px', xs: '350px'},
        backgroundColor:'#FFF',
        borderRadius: '40px',
        position:'center'
      }}
       height='76px'
       value={search}
       onChange={(e) => setSearch(e.target.value.toLowerCase())}
       placeholder='Search Exercise'
       type='text'
       
/>
<Button className='search-btn'
sx={{
       bgcolor: '#FF2625',
       color:'#FFF',
       textTransform: 'none' 
       , width: {lg:'175px' , xs: '80px'},
       fontSize :{ lg: '20px' , xs:"14px"},
       height : '56px',
       position: 'absolute'
       
      
}}
onClick={handleSearch}>
  Search
</Button>
     </Box>
     <Box sx={{ position: 'realative' , width : '100%', p: '20px'}}>
     <HorizontalScrollbar data={bodypart} />
     </Box>
   </Stack>
  )
}

export default SearchExercises 