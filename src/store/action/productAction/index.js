import ActionType from "../../actionType";

const setProductsAction = (value) => ({
  type: ActionType.setProducts,
  payload: value,
});
export default setProductsAction;
