import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material/";
import UpcomingFilter from "./Filters/upcomingFilter";
import LaunchStatusFilter from "./Filters/launchStatusFilter";
import LaunchDateFilter from "./Filters/launchDateFilter";
import ControlerMethods from "./Controler/index";
import { setProductsAction } from "../store/action/productAction";
import Header from "./Header";
import Product from "./Products";

const HomePage = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.products);
  const productList = products;
  const [product_s, setProduct_s] = useState(null);
  const {
    getProductByLaunchDate,
    getProductByLaunchStatus,
    getProductByUpcomingStatus
  } = ControlerMethods();

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/launches")
      .then(res => res.json())
      .then(json => {
        dispatch(setProductsAction(json));
      });
  }, []);

  const onSort = async (type, value) => {
    switch (type) {
      case "upcomingStatus":
        const sortedUpcomingStatusProduct = await getProductByUpcomingStatus(
          value
        );
        return setProduct_s(sortedUpcomingStatusProduct);
      case "launchStatus":
        const sortedLaunchStatusproducts = await getProductByLaunchStatus(
          value
        );
        return setProduct_s(sortedLaunchStatusproducts);
      case "launchDate":
        const sortedLaunchDateProducts = await getProductByLaunchDate(value);
        return setProduct_s(sortedLaunchDateProducts);
      default:
        return;
    }
  };

  return (
    <>
      {productList === null ? (
        <h2>Loading......</h2>
      ) : (
        <>
          <Header setProduct={setProduct_s} />
          <Grid container justifyContent={"center"} spacing={2}>
            <Grid item container md={3}>
              <Grid item xs={12}>
                <UpcomingFilter onSort={onSort} />
                <LaunchStatusFilter onSort={onSort} />
                <LaunchDateFilter onSort={onSort} />
              </Grid>
            </Grid>
            <Grid item container md={9}>
              <Grid item xs={12}>
                <Grid container justifyContent={"center"} spacing={2}>
                  {product_s === null ? (
                    <>
                      {productList &&
                        productList.map(product => {
                          return (
                            <>
                              <Product product={product} />
                            </>
                          );
                        })}
                    </>
                  ) : (
                    <>
                      {product_s?.map((product, index) => {
                        return (
                          <>
                            <Product product={product} />
                          </>
                        );
                      })}
                    </>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};
export default HomePage;
