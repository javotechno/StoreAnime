import { useState, useEffect } from "react";

const GetProds = () => {
  const [prods, setProds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_APP_URL}/api/products`);
        const data = await response.json();
        setProds(data);
      } catch (error) {
        console.log("Error al obtener los datos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return [ loading, prods, setLoading, setProds ]
};

export default GetProds