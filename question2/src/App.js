import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [names, setName] = useState([]);
  // let query = searchInput;
  // if (!query) {
  //   query = "";
  // }

  const datas = async () => {
    const response = await fetch("https://api.publicapis.org/categories");
    // const check = await response.json();
    // console.log(check);
    setName(await response.json());
  };

  useEffect(() => {
    datas();
  }, []);

  return (
    <div className="App">
      <form className="filter">
        <input
          type="text"
          // value={filterInput}
          // onChange={setSearchInput(e.target.value)}
        />
      </form>
      <div className="table">
        <table>
          {names.categories.map((name) => (
            <tr>
              <td>{name}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default App;
