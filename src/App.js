import { useState } from "react";
import Navbar from "./components/Navbar";
import Tenureselect from "./components/Tenureselect";
import Result from "./components/Result";
import Sliderselect from "./components/Sliderselect2";
import { Container, Grid } from "@mui/material";

function App() {
  const [data, setData]=useState({
    homevalue:3000,
    DownPayment: 3000 *0.2,
    loanAmount: 3000 *0.8,
    loanTerm: 5,
    interestrate: 5, 
  });
  
  
  return (
    <div className="App">
      <Navbar />
       
      <Container maxWidth="lg" sx={{mt:4}}>
         <Grid container spacing ={5} alignItems={"center"} justifyContent={"center"}>
          <Grid item xs={12} md={6}>
          <Sliderselect data={data} setData={setData} />
        <Tenureselect data={data} setData={setData}/>
        </Grid>
        <Grid item  md={6}>
        <Result data={data} />
        </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
