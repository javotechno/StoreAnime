import { useContext, createContext, useState } from "react";

export const CartContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const inCart = cart.find((e) => e.id === item._id);

    if (inCart) {
      inCart.quantity += item.quantity;
    } else {
      const newProd = {
        id: item._id,
        title: item.name,
        img: item.img,
        price: item.price,
        quantity: item.quantity,
      };
      setCart([...cart, newProd]);
    }
  };

  const deleteItem = (id) => {
    const inCart = cart.find((e) => e.id === id);

    if (inCart) {
      const newCart = cart.filter(e => e.id !== id)
      setCart(newCart)
    }
  }

  const emptyCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, emptyCart, deleteItem }}>
      {children}
    </CartContext.Provider>
  );
};
