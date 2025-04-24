import React, { useState, useEffect } from "react";
import PlantList from "./PlantList";
import NewPlantForm from "./NewPlantForm";

function App() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddPlant = (newPlant) => {
    setPlants([...plants, newPlant]);
  };

  return (
    <main>
      <h1>Plantsy</h1>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <input
        type="text"
        placeholder="Type a name to search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default App;
