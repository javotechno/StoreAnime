import styled from "styled-components";

const ImgAnim = styled.div`
    position: absolute;
    top: 50vh;
    left: 50vw;
    img {
        animation: move 1s infinite;
        @keyframes move {
        0% { transform: translateX(-100px) }
        50% { transform: translateX(100px) }
        100% { transform: translateX(-100px) }
    }
    }
`

const LoaderSimple = () => {
    return (
        <ImgAnim>
        <img src={'/logo.svg'} />
        </ImgAnim>
    );
}

export default LoaderSimple;
