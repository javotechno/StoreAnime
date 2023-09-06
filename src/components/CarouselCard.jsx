import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #485ba0;
  width: 100%;
  height: 600px;
  border-radius: 15px;
  position: relative;
  .imgSection {
    /* background-color: #d6d6d6; */
    width: 50vw;
    height: 400px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: 100%;
    }
  }
  .text {
    width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    h2 {
      margin-bottom: 20px;
    }
    a {
      z-index: 1;
      margin-top: 3rem;
      font-size: 1.2rem;
      background-color: #FFF;
      padding: 0.6rem 3rem 0.6rem 3rem;
      border-radius: 0.8rem;
      border: #3c4e90 solid 3px;
      font-family: "Oxanium", cursive;
      font-weight: 700;
      cursor: pointer;
      color: #3c4e90;
      box-shadow: 0px 6px 0px 0px #af1313;

      :hover {
        color: #2f3c6d;
        border: #2f3c6d solid 3px;
        transition: all 0.1s ease-in-out;
      }

      :active {
        transform: translate(-3%, 3%);
        background-color: #e9e9e9;
        color: #2f3c6d;
        border: #2f3c6d solid 3px;
        box-shadow: -0px 0px 0px 0px #af1313;
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      li {
        margin-top: 2rem;
      }
    }
  }
  @media (max-width: 768px) {
    height: auto;
    padding: 30px 0;
    background-image: ${({ img }) => `url(${img})`};
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    position: relative; /* Important for positioning the ::before pseudo-element */
    
    ::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.4);
      border-radius: 15px;
    }

    .text {
      width: 100%;
      z-index: 2;
      ul {
        li {
          margin-top: 1rem;
        }
      }
    }
    .imgSection {
      display: none;
    }
  }
`;

const CarouselCard = ({ img, title, text1, text2, text3 }) => {
  return (
    <Card img={img}>
      <div className="text">
        <h2>{title}</h2>

        <ul>
          <li>{text1}</li>
          <li>{text2}</li>
          <li>{text3}</li>
        </ul>
        <Link to={`/products?filter=${title.split(' ')[0].toLowerCase()}&page=1`}>Ver mas</Link>
      </div>
      <div className="imgSection">
        <img src={img} alt={title} />
      </div>
    </Card>
  );
};

export default CarouselCard;
