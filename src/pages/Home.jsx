import Inicio from "../components/Inicio";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import ProdHome from "../components/ProdHome";
import styled from "styled-components";
import CarouselCard from "../components/CarouselCard";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Scroll from "../components/Scroll";
import  OffertHome from "../components/OffertHome"
const HomeStyle = styled.main`
  display: flex;
  flex-direction: column;
  .carouselBack {
    height: 600px;
    width: 100%;
    background-color: #3c4e90;
    display: flex;
    flex-direction:column;
    align-items: start;
    padding-left: 3rem;

  }
  .Background-Vector-Invert {
    transform: rotateX(180deg);
    transform: rotateZ(180deg)
  }
  @media (width < 768px) {
    .carouselBack {
      
      padding: 2rem 0rem 2rem 0rem;
      align-items: center;
      height: auto;
    }
  }
`;

export default function Home() {
  return (
    <HomeStyle>
      <Scroll />
      <Inicio />
      <section className="carouselBack" id="carousel">
        <Splide
          options={{ width: "90%", height: 'auto' }}
          aria-label="My Favorite Images" 
        >
          <SplideSlide >
            <CarouselCard img={"https://res.cloudinary.com/dcmic2snw/image/upload/v1691073411/tiendaAnime/Banda-shipudden_uu01tw-removebg-preview_azbexh.webp"} title={"Ropa y Cosplay"} text1={"Trajes de exelente calidad"} text2={"Variedad de diseños"} text3={"Todos los talles"} />
          </SplideSlide>
          <SplideSlide>
            <CarouselCard img={"https://res.cloudinary.com/dcmic2snw/image/upload/v1686148733/tiendaAnime/image_114_bwkgrl.png"}    title={"Figuras y Coleccionables"}  text1={"Figuras originales importadas"} text2={"Ediciones limitadas"} text3={"Diversas marcas y modelos"} />
          </SplideSlide>
          <SplideSlide>
            <CarouselCard img={"https://res.cloudinary.com/dhtgiy7ji/image/upload/v1691005209/samples/GundamShop/Elixir_kixrjj.png"}    title={"Cartas y Mangas!"} text1={"Mangas populares"} text2={"Cartas competitivas"} text3={"Ediciones coleccionistas"} />
          </SplideSlide>
        </Splide>
      </section>
      <img
        className="Background-Vector-Invert"
        src="./Vector-Blue-Home.svg"
        alt="linea"
      />
      <OffertHome />
      <ProdHome />
      <Contact />
      <Footer />
    </HomeStyle>
  );
}
