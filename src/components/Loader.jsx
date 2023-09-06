import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 50;
  .puertaDerecha {
    height: 100%;
    width: 55.4%;
    z-index: 4;
    position: fixed;
    top: 0;
    transform: translateX(200%);
    animation: ${({ isAnimated }) =>
      isAnimated ? derechaAnimation : "none"} 1.5s ease; /* Uncomment this */
  }

  .puertaIzquierda {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 50%;
    transform: translateX(-100%);
    z-index: 3;
    animation: ${({ isAnimated }) =>
      isAnimated ? izquierdaAnimation : "none"} 1.4s ease; /* Uncomment this */
  }
`;

const derechaAnimation = keyframes`
  25% {
    transform: translateX(80.5%);
  }
  50% {
    transform: translateX(80.5%);
  }
  100% {
    transform: translateX(200%);
  }
`;

const izquierdaAnimation = keyframes`
  25% {
    transform: translateX(0%);
  }
  50% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const Loader = () => {
  const [isAnimated, setIsAnimated] = useState(true);

  useEffect(() => {
    let timeoutId;

    if (isAnimated) {
      timeoutId = setTimeout(() => {
        setIsAnimated(false);
      }, 1500); // Duración de la animación en milisegundos
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isAnimated]);

  return (
    <Wrapper isAnimated={isAnimated}> {/* Pass isAnimated prop here */}
      {/* <img className="puertaDerecha" src="/Puerta derecha.png" alt="" />
      <img className="puertaIzquierda" src="/Puerta izquierda.png" alt="" /> */}
    </Wrapper>
  );
};

export default Loader;