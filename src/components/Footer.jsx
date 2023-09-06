import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterStyle = styled.footer`
  background-color: #1c2e6f;
  color: #fff;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 40px;
  justify-items: center;
  .icon {
    text-align: center;
    p {
      text-align: left;
    }
    img {
      margin-bottom: 20px;
    }
  }
  .navigation {
    ul {
      display: flex;
      flex-direction: column;
      gap: 20px;
      li {
        a {
          color: #fff;
          text-decoration: none;
        }
      }
    }
  }

  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);

    .icon {
      text-align: center;

      p {
        text-align: center;
      }

      img {
        margin-bottom: 20px;
      }
    }

    .navigation {
      display: none;
    }

    .schedules {
      display: flex;
      flex-direction: column;
      margin-top: 2rem;
      margin-bottom: 2rem;

      h3 {
        text-align: center;
      }
      p {
        margin-top: 1rem;
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterStyle>
      <div className="icon">
        <Link to={'/'}><img src="/iconNav.svg" alt="icono" /></Link>
        <p>
          Nuestra organizacion quiere toda la plata, toda la plata, toda la
          plata, toda la plata, toda la plata, toda la plata, toda la plata,
          toda la plata.
        </p>
      </div>
      <div className="schedules">
        <h3>Horarios de atención</h3>
        <p>de 00:01 a 23:59hs (Argentina)</p>
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <Link to={"/"}>Inicio</Link>
          </li>
          <li>
            <Link to={"/products"}>Tienda</Link>
          </li>
        </ul>
      </nav>
    </FooterStyle>
  );
};

export default Footer;
