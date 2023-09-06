import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CartStyle = styled.main`
  display: flex;
  width: 90%;
  margin: 20px auto 0 auto;
  section {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    .item {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: 100%;
      height: 150px;
      border: solid 2px #000;
      border-radius: 15px;
      img:nth-child(1) {
        width: auto;
        height: 90%;
      }
      img:nth-child(3) {
        width: 35px;
        transition: ease-in-out 0.2s;
        &:hover {
          filter: invert(67%) sepia(89%) saturate(7492%) hue-rotate(346deg)
            brightness(84%) contrast(146%);
          cursor: pointer;
        }
      }
      .itemDescription {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 100%;
      }
    }
    &:nth-child(2) {
      justify-content: end;
      align-items: center;
      button {
        padding: 10px;
        border-radius: 10px;
      }
    }
  }
  @media (width < 990px) {
    flex-direction: column;
    section {
      width: 100%;
    }
  }
`;

const EmptyStyle = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    margin: 20px 0;
  }
  .btn {
    padding: 10px;
    background-color: rgb(117, 180, 106);
    color: #fff;
    font-weight: bold;
    border-radius: 15px;
  }
`;

const Cart = () => {
  const { cart, deleteItem } = useContext(CartContext);

  const [total, setTotal] = useState(0);

  const getTotal = () => {
    let totalNum = 0;
    cart.map((e) => {
      const num = e.price * e.quantity;
      totalNum = totalNum + num;
    });
    setTotal(totalNum);
  };

  useEffect(() => {
    getTotal();
  }, [cart]);

  if (cart.length === 0) {
    return (
      <EmptyStyle>
        <p>Todavia no tienes productos en carrito</p>
        <Link className="btn" to={"/products"}>
          Ver productos
        </Link>
      </EmptyStyle>
    );
  }

  return (
    <CartStyle>
      <section>
        {cart.map((e) => (
          <div className="item" key={e.id}>
            <img src={e.img} alt="prodImg" />
            <div className="itemDescription">
              <p>{e.title}</p>
              <p>Cantidad: {e.quantity}</p>
              <p>$ {e.price}</p>
            </div>
            <img
              onClick={() => deleteItem(e.id)}
              src={"/icons/bin.svg"}
              alt="bin"
            />
          </div>
        ))}
      </section>
      <section>
        <p>Total: ${total}</p>
        <button>Terminar compra</button>
      </section>
    </CartStyle>
  );
};

export default Cart;
