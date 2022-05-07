import {useState,useEffect} from 'react';
import {Card,Typography, Grid, CardContent, CardHeader} from '@mui/material/';
import UpcomingFilter from './Filters/upcomingFilter';
import LaunchStatusFilter from './Filters/launchStatusFilter';
import LaunchDateFilter from './Filters/launchDateFilter';
import ControlerMethods from '../component/Controler/index';
import {useDispatch,useSelector} from 'react-redux';
import {setProductsAction} from '../store/action/productAction';
import Header from './Header';

const HomePage=()=>{
    const dispatch=useDispatch();
    const {products} = useSelector((store)=>store.products);
    const productList= products;
    const [product,setProduct]=useState(null);
    const {get_product_by_launchDate,get_product_by_launchStatus,get_product_by_upcomingStatus}=ControlerMethods();
    
    useEffect(()=>{
        fetch("https://api.spacexdata.com/v3/launches")
        .then((res)=>res.json())
        .then((json)=>{
            dispatch(setProductsAction(json));
        })
    },[]);
    const onSort = async (type, value) => {
        switch (type) {
          case "upcomingStatus":
            const sorted_upcomingStatusProduct = await get_product_by_upcomingStatus(value);
            return setProduct(sorted_upcomingStatusProduct);
          case "launchStatus":
            const sorted_launchStatusproducts = await get_product_by_launchStatus(value);
            return setProduct(sorted_launchStatusproducts);
          case "launchDate":
            const sorted_launchDateProducts = await get_product_by_launchDate(value);
            return setProduct(sorted_launchDateProducts);
          default:
            return;
        }
      };
    console.log(product,"===product");
return(
    <>
    {productList === null ? <h2>Loading......</h2>
    :
    <>
    <Header/>
    <Grid container justifyContent={"center"} spacing={2}> 
    <Grid item container md={3}>
    <Grid item xs={12}>
        <UpcomingFilter onSort={onSort}/>
        <LaunchStatusFilter onSort={onSort}/>
        <LaunchDateFilter onSort={onSort}/>
    </Grid>
    </Grid>
    <Grid item container md={9}>
    <Grid item xs={12}>
    <Grid container justifyContent={"center"} spacing={2}>   
            { productList?.map((product)=>{
                    return(
                        <>
                        <Grid item container md={4}>
                        <Grid item xs={12}>
                            <Card sx={{ minWidth: 275 }} >
                            <CardHeader
                                title={product?.rocket?.rocket_name}
                               subheader={product?.rocket?.rocket_type}
                            />
                            <CardContent>
                            <Typography>Flight No : {product?.flight_number}</Typography>
                            <Typography>Launch Date : {product?.launch_date_utc}</Typography>
                            <Typography>Launch Success :  {product?.launch_success?.toString()}</Typography>
                            <Typography>Upcoming : {product?.upcoming?.toString()}</Typography>
                            <Typography  sx={{ fontSize: 14 }} color="text.secondary">Details: {product?.details?.substr(0, 50)}.....</Typography>
                            </CardContent>
                            </Card>
                        </Grid>
                        </Grid>
                        </>
                    );
                })
            }
             </Grid>
             </Grid> 
           </Grid>
    </Grid>
    </>
    }
    
   
    </>
);
}
export default HomePage;