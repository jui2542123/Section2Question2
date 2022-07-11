import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [allData, setData] = useState();
  const [filteredData, setFilteredData] = useState([]);
  // Function to collect data
  const handleSearch = (event) => {
    let value = event.target.value;
    let result = [];
    // result = allData.categories.map((val) => val.toLowerCase());

    result = allData.categories.filter((data) => {
      return data.toLowerCase().search(value.toLowerCase()) != -1;
    });
    setFilteredData(result);
  };

  const getApiData = async () => {
    const response = await fetch("https://api.publicapis.org/categories").then(
      (response) => response.json()
    );

    setData(response);
    setFilteredData(response.categories);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className="App">
      <div id="search">
        <input type="text" onChange={(event) => handleSearch(event)} />
      </div>
      <div className="table">
        <table>
          {filteredData &&
            filteredData.map((user) => (
              <tr>
                <td className="title">{user}</td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
}
export default App;
