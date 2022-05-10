import { useSelector } from "react-redux";

const ControlerMethods = () => {
  const { products } = useSelector((store) => store.products);
  const productList = products;
  let i = 0;
  let product = [];

  const getProductByUpcomingStatus = (statusValue) => {
    statusValue = statusValue.toLowerCase();
    productList.forEach((value) => {
      if (value.upcoming.toString() === statusValue) {
        product[i] = value;
        i++;
      }
    });
    return product;
  };

  const getProductByLaunchStatus = (statusValue) => {
    switch(statusValue){
      case "True":
        productList.forEach((value)=>{
          if (value.launch_success === true) {
              product[i] = value;
              i++;
          }
        });
        return product;
      case "False": 
        productList.forEach((value)=>{
          if(value.launch_success === false){
              product[i]=value;
              i++;
          }
        });
        return product;
      default:
        return ;
    }
  };

  const getProductByLaunchDate = (dateValue) => {
    const ts = Math.round(new Date().getTime() / 1000);
    console.log(ts, "===time");
    const lastWeakStart = ts - 604800;
    const lastWeakEnd = ts - 604800 * 2;
    const lastMonthStart = ts - 2629743;
    const lastMonthEnd = ts - 2629743 * 2;
    const lastYearStart = ts - 31556926 * 4;
    const lastYearEnd = ts - 31556926 * 2;
    switch (dateValue) {
      case "Last Weak":
        productList.forEach((value) => {
          if (
            value.launch_date_unix <= lastWeakEnd &&
            value.launch_date_unix >= lastWeakStart
          ) {
            product[i] = value;
            i++;
          }
        });
        return product;
      case "Last Month":
        productList.forEach((value) => {
          if (
            value.launch_date_unix <= lastMonthEnd &&
            value.launch_date_unix >= lastMonthStart
          ) {
            product[i] = value;
            i++;
          }
        });
        return product;
      case "Last Year":
        productList.forEach((value) => {
          if (
            value.launch_date_unix <= lastYearEnd &&
            value.launch_date_unix >= lastYearStart
          ) {
            product[i] = value;
            i++;
          }
        });
        return product;
      default:
        return;
    }
  };
  const searchProductByRocketName = (searchValue) => {
    let rocketName = searchValue.toUpperCase();
    productList.forEach((value) => {
      if (value.rocket.rocket_name.toUpperCase().indexOf(rocketName) > -1) {
        product[i] = value;
        i++;
      }
    });
    return product;
  };
  return {
    getProductByUpcomingStatus,
    getProductByLaunchStatus,
    getProductByLaunchDate,
    searchProductByRocketName
  };
};
export default ControlerMethods;
