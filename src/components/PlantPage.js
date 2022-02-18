import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  
  useEffect(()=>{
    fetch("http://localhost:6001/plants")
      .then((r)=>r.json())
      .then(plantData => setPlants(plantData))
  }, [])

  function addNewPlantList(props){
    setPlants(props)
  }

  return (
    <main>
      <NewPlantForm plants={plants} addNewPlant={(prop)=>addNewPlantList(prop)}/>
      <Search />
      <PlantList plants={plants}/>
    </main>
  );
}

export default PlantPage;
