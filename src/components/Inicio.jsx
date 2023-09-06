import styled from "styled-components";

const Inicios = styled.section`
  background-color: #222222;
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;

  .background {
    position: absolute;
    top: -30% !important;
    width: 100%;
    left:0 !important;
    z-index: 0;
    filter:brightness(100%);
    
  }

  h1 {
    z-index: 2;
    color: white;
    font-size: 4rem;
    font-family: "Oxanium", cursive;
    text-shadow: -4px 1px 0px #3c4e90;
    margin-left: 5rem;
    margin-bottom: 2rem;
    animation: Letras 1.5s ease-in-out infinite;
  }

  h3 {
    z-index: 1;
    color: grey;
    margin-left: 5rem;
  }

  div {
    z-index: 1;
    margin-bottom: 7rem;
  }
  button {
    z-index: 1;
    margin-top: 3rem;
    font-size: 1.2rem;
    margin-left: 5rem;
    padding: 0.6rem 3rem 0.6rem 3rem;
    border-radius: 0.8rem;
    border: #3c4e90 solid 3px;
    font-family: "Oxanium", cursive;
    font-weight: 700;
    cursor: pointer;
    color: #3c4e90;
    box-shadow: -6px 4px 0px 0px #af1313;

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
  .Estatua {
    z-index: 1;
    width: 550px;
    position: absolute;
    right: 10%;
    top: 28%;
    pointer-events: none;
    animation: Mecha 0.7s linear;
  }

  .Background-Vector-White {
    width: 100%;
    position: absolute;
    bottom: -10%;
    right: 0%;
    z-index: 0;
    pointer-events: none;
  }

  .Background-Vector-Blue {
    width: 100%;
    position: absolute;
    bottom: 0;
    right: 0%;
    z-index: 1;
    pointer-events: none;
  }

  @keyframes Mecha {
    0% {
      transform: translateY(-150%);
    }
  }

  @keyframes Letras {
    0% {
      transform: translateY(0%);
    }

    50% {
      transform: translateY(4%);
    }

    100% {
      transform: translateY(0%);
    }
  }
  @media (max-width: 1024px) {
    img {
      display: none;
    }
  }
  @media (max-width: 576px) {
    align-items: center;
    text-align: center;
    padding: 0rem 1rem;
    justify-content: center;
    h1 {
      margin-left: 0rem;
      margin-bottom: 4rem;
      br {
        display: none;
      }
    }
    h3 {
      color: #adacac;
      width: 90%;
      margin-left: 0rem;
    }
  }

  .background {
    object-fit: cover;
    display: block;
    position: absolute;
    top: 3%;
    left: 2%;
    height: 100%;
    width: 95%;

    filter: brightness(70%);
  }
`;

export default function Inicio() {
  return (
    <Inicios>
      <h1>
        Tu tienda online <br /> de Anime
      </h1>
      <h3>Los mejores productos al mejor precio</h3>
      <div></div>
      <img className="background" src="/BackgroundPlanetas.svg" alt="" />
      <img className="Estatua" src="./Estatua.png" alt="" />
      <img
        className="Background-Vector-White"
        src="./Vector-White-Home.svg"
        alt="estatua"
      />
      <img
        className="Background-Vector-Blue"
        src="./Vector-Blue-Home.svg"
        alt="linea"
      />
    </Inicios>
  );
}
