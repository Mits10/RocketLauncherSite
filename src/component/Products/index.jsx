import React from "react";
import {
  Card,
  Typography,
  Grid,
  CardContent,
  CardHeader,
} from "@mui/material/";

const Product = ({ product }) => {
  return (
    <Grid item container md={4}>
      <Grid item xs={12}>
        <Card
          sx={{
            minWidth: 275,
            bgcolor: "info.main",
            color: "white",
            height: 300,
            borderRadius: 4,
            justifyContent: "center",
          }}
        >
          <CardHeader
            title={product?.rocket?.rocket_name}
            subheader={product?.rocket?.rocket_type}
          />
          <CardContent>
            <Typography>Flight No : {product?.flight_number}</Typography>
            <Typography>Launch Date : {product?.launch_date_utc}</Typography>
            <Typography>
              Launch Success : {product?.launch_success?.toString()}
            </Typography>
            <Typography>Upcoming : {product?.upcoming?.toString()}</Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary">
              Details: {product?.details?.substr(0, 3)}.....
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
export default Product;
