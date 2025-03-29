import axios from "axios";
import react, { useState } from "react";
import Card from "./Card";


const Book = () => {
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
      if (!keyword) {
          alert("Please enter a keyword to search.");
          return;
      }

      try {
          // Use axios.get to call the backend API
          const response = await axios.get('http://localhost:3000/product/search?', {
              params: {q: keyword }
          });
          setResults(response.data.product); // Update state with API results
      } catch (error) {
          console.error("Search error:", error);
      }

  }
 
  return (
    
   

        <body className="mainsearchbar">
          <div className="bac">
            <div className="overlay">
              <div className="search-containe">
                <input
                  type="text"
                  className="search-bar9"
                  placeholder="Search for more books..."  value={keyword} 
                  onChange={(e) => setKeyword(e.target.value)} 
   
                />
                <button  onClick={handleSearch} className="search-button8">
                  <i className="fa fa-search"></i> search
                </button>
              </div>
          <div className="backgr">
          {<Card book={results} />

}

            </div>
          </div>




</div>
        </body>

       

    
  );
}
export default Book;