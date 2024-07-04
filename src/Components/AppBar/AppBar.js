import React from 'react'
import { AppBar, Toolbar, Grid} from '@mui/material';
import Logo from '../Assets/logo.jpg';
import Switch from '@mui/material/Switch';


//function named AppBar1 is created.
function AppBar1({check,change}) {

  return (
    

 <AppBar sx={{background:'#76B39D',
    alignItems:'initial',
    justifyContent: 'space-between',
   
 }}> 
    <Toolbar >
   <img src={Logo} alt="Logo" style={{ maxWidth:'25%'}} /> 
   {/* <IconButton aria-label="fingerprint" color="#76B39D">
   <AutoStoriesIcon/>
</IconButton> 
  <Tabs value={value} onChange={handleChange} sx={{alignItems:'center'}} >
  <Tab item label="Home " sx={{color: '#76B39D' }} />
      <Tab item label="1" />
      <Tab item label="Tab 3" sx={{ color: '#0000ff' }} />
      </Tabs> */}
   
    <Grid container  p={2} 
     sx={{color:'#111111' , textAlignLast:"auto"}}>
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>Home</Grid>
    <Grid item  xs={12} sm={6} md={4} lg={3} xl={2} >Services</Grid>
    <Grid item  xs={12} sm={6} md={4} lg={3} xl={2}>Team</Grid>
    <Grid item  xs={12} sm={6} md={4} lg={3} xl={2}>About Us</Grid>
    <Grid item  xs={12} sm={6} md={4} lg={3} xl={2}>
        <input type="text" placeholder='Search Here'/></Grid>
    </Grid>
    <Switch
         defaultChecked
         color='default'
         inputProps={{' area-label':'checkbox with default color'}}
         onChange={change}
         checked={check}
         />
 </Toolbar>
</AppBar>

)      
}

export default AppBar1
