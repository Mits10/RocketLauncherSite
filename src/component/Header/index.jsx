import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, FormControl } from "@material-ui/core";
import { Grid, Stack } from "@mui/material/";
import ControlerMethods from "../Controler/index";

const Header = ({ setProduct }) => {
  const [searchValue, setSearchValue] = useState("");
  const { searchProductByRocketName } = ControlerMethods();
  const onSearchSubmit = async (e) => {
    e.preventDefault();
    const products = await searchProductByRocketName(searchValue);
    setProduct(products);
  };
  return (
    <Grid container justifyContent="center" spacing={2}>
      <Grid item container md={6}>
        <Grid item xs={12}>
          <h2>Rocket Launcher</h2>
        </Grid>
      </Grid>
      <Grid item container md={6}>
        <Grid item xs={12}>
          <FormControl>
            <Stack direction="row" spacing={2}>
              <TextField
                id="filled-search"
                label="Search field"
                type="search"
                variant="filled"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <Button onClick={(e) => onSearchSubmit(e)}>Search</Button>
            </Stack>
          </FormControl>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Header;
