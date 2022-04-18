import { createContext, useContext, useState } from "react";
// import faker from "faker";
import list from './data';

const Cart = createContext();
// faker.seed(100);

const Context = ({ children }) => {
  
  const [cart, setCart] = useState([]);

  const productsArray = list.map((p) => ({
    id: p.id,
    name: p.name,
    price: p.price,
    image: p.image,
  }));

  const [products] = useState(productsArray);

  return (
    <Cart.Provider value={{ cart, setCart, products }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
