import { useState, useEffect } from "react";
import { CardProds } from "../components/CardProds";
import styled from "styled-components";
// import GetProds from "../hooks/GetProds";
import Pagination from "../components/Pagination";
import { useLocation, useNavigate, Link } from "react-router-dom";
import LoaderSimple from "../components/LoaderSimple";
import React from "react";

const ProductStyles = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  nav {
    width: 90%;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    border: solid 2px #bfbfbf;
    border-radius: 40px;
    padding: 15px 40px;

    box-shadow: 4px 7px 0px 0px #bfbfbf;

    ul {
      display: flex;
      align-items: center;
      gap: 80px;
      li {
        :hover {
          cursor: pointer;
        }
      }
      li:nth-child(1) {
        position: relative;
        ol {
          padding: 5px;
          width: 100px;
          border: solid 1px #000;
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: #fff;
          border-radius: 15px;
          z-index: 2;
          li {
            padding: 5px;
            width: 100%;
            border-radius: 10px;
            &:hover {
              background-color: #3c4e90;
            }
            &:hover a {
              color: #fff;
            }
          }
        }
      }
    }
    .search {
      border-radius: 20px;
      display: flex;
      align-items: center;
      border: solid 3px #333333;
      box-shadow: 2px 2px 0px 0px #333333;

      input {
        border: none;
        padding: 10px;
        width: 150px;
        border-radius: 17px 0 0 17px;
        :focus {
          outline: none;
        }
      }
      .searchIcon {
        background-color: #3c4e90;
        border-radius: 0 16px 16px 0;
        width: 50px;
        height: 100%;
        display: flex;
        justify-content: center;
        border: solid #333333 1px;
        box-shadow: 2px 4px 0px 0px #333333;
        img {
          width: 25px;
          margin-left: 5px;
          filter: invert(100%);
        }
      }
    }
  }
  .prods {
    margin-top: 2rem;
    display: grid;
    width: 90%;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    margin-bottom: 2rem;
  }
  @media (max-width: 1080px) {
    .prods {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
  }
  @media (max-width: 576px) {
    .prods {
      margin-top: 2rem;
      display: grid;
      width: 100%;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      gap: 25px;
      margin-bottom: 2rem;
    }
    nav {
      flex-direction: column;
      width: 100%;
      ul {
        justify-content: center;
        gap: 20px;
      }
      .search {
        margin-top: 20px;
        input {
          width: 100%;
          border-radius: 17px;
        }
        .searchIcon {
          display: none;
        }
      }
    }
  }
`;

const Products = () => {
  const [prods, setProds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const [filter, setFilter] = useState("");
  const [types, setTypes] = useState(false);
  const [order, setOrder] = useState("asc");

  const location = useLocation();
  const navigation = useNavigate();

  const page =
    location.search.split("")[location.search.split("").length - 1] || 1;
  const urlParams = new URLSearchParams(location.search);
  const filterParam = urlParams.get("filter");

  const fetchData = async () => {
    setLoading(true);
    try {
      if (filterParam) {
        setFilter(filterParam);
      }
      const response = await fetch(
        `${
          import.meta.env.VITE_APP_URL
        }/api/products?search=${searchTerm}&filter=${filter}&page=${page}&limit=9&order=${order}`
      );
      const data = await response.json();
      setProds(data.docs);
      setTotalPages(data.totalPages);
      setLoading(false);
      // setTimeout(() => {
      // }, 1500);
    } catch (error) {
      console.log("Error al obtener los datos:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page, filterParam, filter, order, searchTerm]);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
  };

  const handlePageChange = async (page) => {
    navigation(`/products?page=${page}`);
  };

  const categories = ["ropa", "funko pop", "cartas", "figuras", "mangas"];

  return (
    <ProductStyles>
      <nav>
        <ul>
          <li onClick={() => setTypes(!types)}>
            Tipo
            <ol style={types ? { display: "flex" } : { display: "none" }}>
              {categories.map((e, i) => (
                <li key={i}>
                  <Link to={`/products/?filter=${e}&page=1`}>{e}</Link>
                </li>
              ))}
            </ol>
          </li>
          <li onClick={() => setOrder("asc")}>Precio Min</li>
          <li onClick={() => setOrder("desc")}>Precio Max</li>
        </ul>
        <div className="search">
          <input
            placeholder="Buscar..."
            type="text"
            value={searchTerm}
            onChange={handleSearch}
          />
          <div className="searchIcon">
            <img src="/searchIcon.svg" alt="Search Icon" />
          </div>
        </div>
      </nav>
      {loading && <LoaderSimple />}
      {!loading && (
        <React.Fragment>
          <section className="prods">
            {prods.length !== 0 &&
              prods.map((item, i) => <CardProds key={i} item={item} />)}
          </section>
          <Pagination
            currentPage={Number(page)}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </React.Fragment>
      )}
    </ProductStyles>
  );
};

export default Products;
