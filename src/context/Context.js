import { createContext, useContext, useReducer } from "react";
// import faker from "faker";
import { cartReducer, productReducer } from "./Reducers";
import list from "./data";

const Cart = createContext();
// faker.seed(99);

const Context = ({ children }) => {
  const products = list.map((item) => ({
    id: item.id,
    name: item.name,
    price:item.price,
    image: item.image,
    inStock: item.title,
    // fastDelivery: faker.datatype.boolean(),
    // ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
    ratings: item.rating,
    fastDelivery: item.fastDelivery,
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  console.log(productState);

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
