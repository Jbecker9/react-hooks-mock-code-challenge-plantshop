import React, {useState} from "react";

function NewPlantForm({ plants, addNewPlantList }) {
  const [newPlantName, setNewPlantName] = useState('')
  const [newPlantUrl, setNewPlantUrl] = useState('')
  const [newPlantPrice, setNewPlantPrice] = useState(0)
  const [newPlant, setNewPlant] = useState({
    name: "",
    image: "",
    price: 0
  })

  function stateNewPlantName(event){
    setNewPlantName(event.target.value)
  }

  function stateNewPlantUrl(event){
    setNewPlantUrl(event.target.value)
  }

  function stateNewPlantPrice(event){
    setNewPlantPrice(parseFloat(event.target.value))
  }

  function submitNewPlant(event){
    event.preventDefault()
    const newPlantObj = {
      name: newPlantName,
      image: newPlantUrl,
      price: newPlantPrice
    }
    fetch(" http://localhost:6001/plants",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlantObj)
    })
      .then((r)=>r.json())
      .then((data)=>setNewPlant(data))
    const newPlantList = [...plants, newPlant]
    addNewPlantList(newPlantList)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={submitNewPlant}>
        <input onChange={(e)=>stateNewPlantName(e)} type="text" name="name" placeholder="Plant name" />
        <input onChange={(e)=>stateNewPlantUrl(e)} type="text" name="image" placeholder="Image URL" />
        <input onChange={(e)=>stateNewPlantPrice(e)} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
