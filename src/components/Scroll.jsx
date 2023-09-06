import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

const ScrollStyle = styled.div`
  width: 50px;
  height: 250px;
  background-color: #fff;
  overflow: hidden;
  position: fixed;
  top: 40vh;
  z-index: 10;
  right: 20px;
  border: solid 2px #2f3c6d;
  border-radius: 15px;
  align-items: center;
  box-shadow: 4px 3px 0px 0px #af1313;
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    height: 33%;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    display:none;
  }
`;

const Scroll = () => {
  const [startIndex, setStartIndex] = useState(0);

  const sections = ['carousel', 'news', 'contact'];

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition === 0) {
      setStartIndex(0);
    } else if (scrollPosition < window.innerHeight) {
      setStartIndex(1);
    } else if (scrollPosition < window.innerHeight * 3) {
      setStartIndex(2);
    } else {
      setStartIndex(3);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (section) => {
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      const yOffset = -150;
      const y = sectionElement.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <ScrollStyle>
      {sections.map((e, i) => (
        <p
          key={i}
          style={startIndex === i + 1 ? { color: '#AF1313', transform: 'scale(1.3)' } : { color: '#55649E' }}
          onClick={() => handleClick(e)}
        >
          {i + 1}
        </p>
      ))}
    </ScrollStyle>
  );
};

export default Scroll;
