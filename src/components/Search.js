import React, { useState } from "react";

function Search({ plants, plantSearch }) {
  const [searchWord, setSearchWord] = useState("")

  function onSearch(event){
    setSearchWord(event.target.value)
    const filterPlants = plants.filter((plant) => plant.name.toLowerCase().includes(searchWord.toLowerCase()))
    plantSearch(filterPlants)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => onSearch(e)}
      />
    </div>
  );
}

export default Search;
