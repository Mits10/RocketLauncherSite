import TextField from '@mui/material/TextField';
import { Button } from '@material-ui/core';
import {Grid} from '@mui/material/';

const Header= ()=>{
    return(
        <>
        <Grid container justifyContent={"center"} spacing={2}> 
        <Grid item container md={8} >
        <Grid item xs={12}>
            <h2>Rocket Launcher</h2>
        </Grid>
        </Grid>
        <Grid item container md={4}>
        <Grid item xs={12}>
        <TextField
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
        />
        <Button>Search</Button>
        </Grid>
        </Grid>
         
        </Grid>
        </>
    );
}
export default Header;