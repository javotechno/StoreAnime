import { useEffect, useState } from "react";
import prodsAPI from "../api/prodsAPI";
import { BigCardProds } from "./CardProds";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ProductHomeStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  padding: 20px 0px 0px 3rem;

  .news {
    box-shadow: #bfbfbf 3px 3px 0px 4px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 1rem;
    border: solid 1px #bfbfbf;
    border-radius: 30px;

    img {
      height: 100%;
      object-fit: cover;
      width: 50%;
    }
    .text {
      display: flex;
      padding-top: 2rem;
      height: 100%;
      flex-direction: column;
      width: 40%;

      h3 {
        font-size: 3rem;
      }

      p {
        font-size: 1rem;
        margin-top: 20px;
      }

      a {
        color: white;
        font-weight: bold;
        border: #536397 solid 2px;
        border-radius: 25px;
        padding: 10px 30px;
        margin-top: 2rem;
        align-self: center;
        box-shadow: #1d1d1d 1px 5px 0px 0px;
        background-color: #6a7bb4;
      }
    }
  }

  .container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
  button {
    margin: 30px 0 20px 0;
    padding: 10px 20px;
    border-radius: 15px;
    border: solid 2px #000;
    font-weight: bold;
    background-color: transparent;
  }

  .sales {
    display: flex;
    justify-content: center;
    gap: 40px;
    margin: 50px 0;
    width: 100%;
  }

  @media (max-width: 1024px) {
    .news {
      flex-direction: column;
      height: auto;
      img {
        object-fit: cover;
        width: 100%;
        height: 300px;
      }
      .text {
        width: 100%;
      }
    }
    .sales {
      
    }
  }

  @media (max-width: 576px) {
    padding: 20px 0px 0px 3rem;

    .news {
      flex-direction: column;
      align-items: center;
      height: 10%;

      img {
        object-fit: cover;
        width: 100%;
        height: auto;
      }

      .text {
        padding-top: 2rem;
        height: 100%;

        width: 100%;

        h3 {
          font-size: 2rem;
          text-align: center;
        }

        p {text-align: center;
          font-size: 0.8rem;
          margin-top: 20px;
        }

        .text-pc {
          display: none;
          
        }

        a {
          color: white;
          font-weight: bold;
          border: #536397 solid 2px;
          border-radius: 25px;
          padding: 10px 30px;
          margin-top: 1rem;
          align-self: center;
          box-shadow: #1d1d1d 1px 5px 0px 0px;
          background-color: #6a7bb4;
        }
      }
    }

    .sales {
      display: flex;
      flex-direction: column;
      margin: 50px 0;
      width: 100%;
    }
  }
`;

function ProductHome() {
  const [prods, setProds] = useState([]);

  const getProds = async () => {
    const data = await prodsAPI.getProds();
    setProds(data.docs);
  };

  useEffect(() => {
    getProds();
  }, []);

  return (
    <ProductHomeStyle>
      <section className="news" id="news">
        <img src="https://res.cloudinary.com/dcmic2snw/image/upload/v1691073685/tiendaAnime/image_118_qsreme.webp" />
        <div className="text">
          <h3>Revisa nuestras ofertas!</h3>
          <p>
            Explora nuestra selección especial de productos con descuentos
            increíbles, especialmente para ti, amante del anime.
          <span className="text-pc">
            ¡No querrás perderte estas oportunidades únicas para añadir a tu
            colección y mostrar tu pasión! Haz clic en el enlace a continuación
            y descubre las mejores ofertas que tenemos para ti.
          </span></p>
          <Link to={`/products`}>Ver Más ...</Link>
        </div>
      </section>
      <section className="sales" id="sales">
        {prods.length !== 0
          ? prods
              .slice(0, 2)
              .map((e, i) => (
                <BigCardProds className="cardHome" key={i} item={e} />
              ))
          : ""}
      </section>
    </ProductHomeStyle>
  );
}

export default ProductHome;
