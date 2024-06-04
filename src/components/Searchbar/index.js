import React, { useState } from 'react'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => { 
    const data = []
  const [searchTerm, setSearchTerm] = useState(''); 
  const handleSearch = (e) => { 
    setSearchTerm(e.target.value); 
    }; 
    const filteredResults = data.filter(item => 
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
       );
    return ( 
      <div> 
        <input type="text" value={searchTerm} onChange={handleSearch} placeholder="¿Qué estas buscando?" /> 
        <ul>
          {filteredResults.map(item => ( 
              <li key={item.id}>{item.title}</li> 
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