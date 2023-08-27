import React from 'react';
//import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Tenureselect = ({data, setData}) => {
 

  const handleChange = (event) => {
    setData({
      ...data,
      loanTerm: event.target.value,
    });
  };
  return (
    <FormControl fullWidth>
    <InputLabel id="demo-simple-select-label">TimePeriod</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={data.loanTerm}
      label="Time Period"
      onChange={handleChange}
    >
      <MenuItem value={1}>5 Years </MenuItem>
      <MenuItem value={2}>10 Years</MenuItem>
      <MenuItem value={3}>15 Years</MenuItem>
      <MenuItem value={4}>20 Years</MenuItem>
      <MenuItem value={5}>25 Years</MenuItem>
    </Select>
  </FormControl>
  )
}

export default Tenureselect