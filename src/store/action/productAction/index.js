import ActionType from '../../actionType';


export const setProductsAction=(value)=>({
    type: ActionType.setProducts,
    payload: value,
});