import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const clearSearch = () => {
    setTimeout(() => {
      setData([]);
    }, 1000);
  };

  useEffect(() => {
    if (searchTerm !== "") {
      const searchTime = setTimeout(() => {
        fetch("http://localhost:4200/search?word=" + searchTerm)
          .then((response) => response.json())
          .then((data) => setData(data))
          .catch((e) => console.error(e));
      }, 2000);

      return () => clearTimeout(searchTime);
    }
  }, [searchTerm]);

  return (
    <div className={styles["search-container"]} onBlur={clearSearch}>
      <input
        id="buscador"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="¿Qué estas buscando?"
      />

      <ul className={styles["barra-busqueda"]}>
        {data.map((d, i) => (
          <Link key={i} to={d.url}>
            <li>{d.name}</li>
          </Link>
        ))}
      </ul>
    </div>

    /* <div className="overlap-4"><SearchBar />
            <div className="cajabuscador">
              <div className="box">
                <input
                  className="buscador"
                  type="text"
                  placeholder="¿Qué estás buscando?"
                  required
                />
              </div>
              <div className="search">
                <FontAwesomeIcon icon={faSearch} />
              </div>
            </div>
          </div> */
    /* <div className="overlap-group-wrapper">
            <div className="overlap-group-2">
              <div className="text-wrapper-8">Contáctanos</div>
              <div className="rectangle"></div>
            </div>
          </div> */
  );
};
export default SearchBar;
