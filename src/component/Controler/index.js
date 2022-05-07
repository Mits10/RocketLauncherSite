import {useDispatch,useSelector} from 'react-redux';
import {setProductsAction} from '../../store/action/productAction';

const ControlerMethods=()=>{
    const {products} = useSelector((store)=>store.products);
    const productList= products;
    let i=0;
    const get_product_by_upcomingStatus=(value)=>{
        let product=[];
        switch(value){
            case "True":
                productList.forEach((value)=>{
                    if(value.upcoming === true)
                    {
                        product[i]=value;
                        i++;
                    }
                })
            return product;
            case "False": 
            productList.forEach((value)=>{
                if(value.upcoming === false)
                {
                    product[i]=value;
                    i++;
                }
            })
            return product;
            default:
            return
        }
    }
    const get_product_by_launchStatus=(value)=>{
        let product=[];
        switch(value){
            case "True":
                productList.forEach((value)=>{
                    if(value.launch_success === true)
                    {
                        product[i]=value;
                        i++;
                    }
                })
            return product;
            case "False": 
            productList.forEach((value)=>{
                if(value.launch_success === false)
                {
                    product[i]=value;
                    i++;
                }
            })
            return product;
            default:
            return
        }
    }
     const get_product_by_launchDate=(value)=>{
        let ts = Math.round((new Date()).getTime() / 1000);
        let lastWeakStart= ts-604800;
        let lastWeakEnd=ts-604800*2;
        let lastMonthStart= ts-2629743;
        let lastMonthEnd= ts-2629743*2;
        let lastYearStart= ts- 31556926;
        let lastYearEnd= ts- 31556926*2;
        let product=[];
        switch(value){
            case "Last Weak":
                productList.forEach((value)=>{
                    if(value.launch_date_unix <= lastWeakEnd && value.launch_date_unix>=lastWeakStart)
                    {
                        product[i]=value;
                        i++;
                    }
                })
            return product;
            case "Last Month": 
            productList.forEach((value)=>{
                if(value.launch_date_unix <= lastMonthEnd && value.launch_date_unix >= lastMonthStart)
                {
                    product[i]=value;
                    i++;
                }
            })
            return product;
            case "Last Year": 
            productList.forEach((value)=>{
                if(value.launch_date_unix <=lastYearEnd && value.launch_date_unix >=lastYearStart)
                {
                    product[i]=value;
                    i++;
                }
            })
            return product;
            default:
            return
        }
    }
    return {
        get_product_by_upcomingStatus,
        get_product_by_launchStatus,
        get_product_by_launchDate,
    };
}
export default ControlerMethods;
