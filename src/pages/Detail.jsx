import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import prodsAPI from "../api/prodsAPI";
import styled from "styled-components";
import { CartContext } from "../context/CartContext";
import LoaderSimple from "../components/LoaderSimple";

const DetailStyle = styled.main`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  min-height: 80vh;
  article {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .previewImg {
      height: 60vh;
      width: 80%;
      border: solid 3px #000;
      border-radius: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
      img {
        justify-self: center;
        height: 90%;
        padding: 20px;
      }
    }
    .previewList {
      display: flex;
      justify-content: center;
      gap: 20px;
      height: 20vh;
      width: 100%;
      .previewItem {
        width: 25%;
        border-radius: 15px;
        display: flex;
        justify-content: center;
        padding: 5px;
        img {
          height: 100%;
        }
      }
    }
  }
  article:nth-child(1) {
  }
  article:nth-child(2) {
    justify-content: space-evenly;
    height: 100%;
    margin: auto 0;
    .footerContainer {
      width: 70%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .itemCounter {
        display: flex;
        flex-direction: column;
        align-items: center;
        p {
          font-size: 20px;
          padding: 5px 15px;
        }
        .counter {
          display: flex;
          button {
            border: none;
            border-radius: 5px;
            font-weight: bold;
            padding: 10px;
            display: flex;
            img {
              width: 25px;
            }

            &:hover {
              outline: #2c2c2c 1px solid;
              background-color: #75b46a;
              cursor: pointer;
            }
          }
        }
      }
      .buyBtn {
        text-decoration: none;
        cursor: pointer;
        font-size: smaller;
        font-weight: bold;
        color: white;
        background-color: #75b46a;
        border-radius: 0.8rem;
        padding: 0.8rem 2rem 0.8rem 2rem;
        font-size: 17 px;
        border: rgb(0, 0, 0) solid 1px;
        box-shadow: rgba(0, 0, 0, 1) 2px 3px 0px 0px;
        :active {
          color: white;
          transform: scale(0.9);
          box-shadow: rgba(0, 0, 0, 1) 1px 1px 0px 0px;
        }
      }
    }
  }
  @media (width < 1024px) {
    grid-template-columns: 1fr;
    align-items: center;
    article {
      .previewImg {
        width: 90%;
        height: 60vh;
        img {
          height: 90%;
        }
      }
      .previewList {
        display: none;
      }
    }
    article:nth-child(2) {
      margin-top: 20px;
    }
  }
  @media (max-width: 425px) {
    article {
      .previewImg {
        height: auto;
        img {
          height: auto;
          width: 100%;
        }
      }
    }
    article:nth-child(2) {
      .infoContainer {
        text-align: center;
      }
      .footerContainer {
        width: 100%;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        .buyBtn {
          margin-top: 20px;
        }
      }
    }
  }
`;

const Detail = () => {
  const { id } = useParams();
  const [prod, setProd] = useState("");
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useContext(CartContext);

  const getProd = async () => {
    const prod = await prodsAPI.getProd(id);
    setProd(prod);
  };

  const navigate = useNavigate();

  const goToCart = () => {
    addToCart({ ...prod, quantity: 1 });
    navigate("/cart");
  };

  const changeQuantity = (num) => {
    if (num === -1 && quantity === 1) {
      console.log("No se puede comprar menos de 1 producto");
    } else if (num === 1 && quantity === prod.stock) {
      console.log("No hay mas stock de este producto");
    } else {
      setQuantity(quantity + num);
    }
  };

  useEffect(() => {
    getProd();
  }, []);

  if (prod === "") {
    return (
      <main>
        <LoaderSimple />
      </main>
    );
  }

  return (
    <DetailStyle>
      <article className="imgContainer">
        <div className="previewImg">
          <img src={prod.img} alt={prod.category} />
        </div>
        <div className="previewList">
          {[1, 2, 3].map((e, i) => (
            <div className="previewItem" key={i}>
              <img src={prod.img} alt={prod.category} />
            </div>
          ))}
        </div>
      </article>
      <article className="articleInfo">
        <h3 className="infoContainer">{prod.name}</h3>
        <p>{prod.description}</p>
        <div className="footerContainer">
          <div className="itemCounter">
            <p>Stock: {prod.stock === 1 ? "Ultimo disponible" : prod.stock}</p>
            <div className="counter">
              <button onClick={() => changeQuantity(-1)}>
                <img src="/icono-minus.svg" />
              </button>
              <p>{quantity}</p>
              <button onClick={() => changeQuantity(1)}>
                <img src="/icono-plus.svg" />
              </button>
            </div>
          </div>
          <button onClick={() => goToCart()} className="buyBtn">
            Comprar
          </button>
        </div>
      </article>
    </DetailStyle>
  );
};

export default Detail;
