import { React, useState, useEffect } from "react";
import "./App.css";

function List(props) {
  const [names, setName] = useState([]);
  const datas = async () => {
    const response = await fetch("https://api.publicapis.org/categories");
    setName(await response.json());
  };

  const filteredData = names.categories.filter((el) => {
    if (props.input === "") {
      return el;
    } else {
      return el.text.toLowerCase().includes(props.input);
    }
  });

  useEffect(() => {
    datas();
  }, []);

  return (
    <table>
      {names.categories.map((name) => (
        <tr>
          <td>{name}</td>
        </tr>
      ))}
    </table>
  );
}
export default List;
