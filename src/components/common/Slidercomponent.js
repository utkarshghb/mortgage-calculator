import React, { Fragment } from 'react'
import Slider from '@mui/material/Slider';
import { Stack, Typography } from '@mui/material';
const Slidercomponent = ({min, max,step,onChange,defaultValue,value,label,unit,amount}) => {
  return (
    <Fragment>
    <Stack gap={2}>
    <Typography variant="subtitle1" >{label}</Typography>
    <Typography variant ="h6" >{unit}{amount}</Typography>
    </Stack>
    <Slider 
    defaultValue={defaultValue}
    min ={min} 
    max={max} 
    aria-label="Default" 
    valueLabelDisplay="auto"
    marks
    step={step} 
    onChange={onChange}
    value={value}
    
    />
    <Stack direction={'row'} justifyContent={'space-between'}>
    <Typography variant='caption' color= 'text.secondary'>{min}</Typography>
    <Typography variant='caption' color= 'text.secondary'>{max}</Typography>
    </Stack>
    </Fragment>
    
  )
}

export default Slidercomponent