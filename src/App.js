import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const BACKEND_URL = "http://192.168.31.180:3000";

function App() {
  const [itemToAdd, setItemToAdd] = useState("");
  const [items, setItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const handleChangeItem = (event) => {
    setItemToAdd(event.target.value);
  };

  const handleAddItem = () => {
    axios
      .post(`${BACKEND_URL}/todos`, {
        label: itemToAdd,
      })
      .then((response) => {
        const newItem = response.data;
        setItems([newItem, ...items]);
      });
    setItemToAdd("");
  };

  const toggleItemDone = ({ id, done }) => {
    axios
      .put(`${BACKEND_URL}/todos/${id}`, {
        done: !done,
      })
      .then((response) => {
        const newItem = response.data;
        setItems(
          items.map((item) => {
            if (item.id === newItem.id) {
              return newItem;
            }
            return item;
          })
        );
      });
  };
  const handleItemDelete = (id) => {
    axios.delete(`${BACKEND_URL}/todos/${id}`).then((response) => {
      setItems(items.filter((item) => item.id !== response.data?.id));
    });
  };

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/todos/?filter=${searchValue}`)
      .then((response) => {
        setItems(response.data);
      });
  }, [searchValue]);

  return (
    <div className="todo-app">
      {/* App-header */}
      <div className="app-header d-flex">
        <h1>Todo List</h1>
      </div>

      <div className="top-panel d-flex">
        {/* Search-panel */}
        <input
          type="text"
          className="form-control search-input"
          placeholder="type to search"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        />
      </div>

      {/* List-group */}
      <ul className="list-group todo-list">
        {items.length > 0 ? (
          items.map((item) => (
            <li key={item.id} className="list-group-item">
              <span className={`todo-list-item${item.done ? " done" : ""}`}>
                <span
                  className="todo-list-item-label"
                  onClick={() => toggleItemDone(item)}
                >
                  {item.label}
                </span>

                <button
                  type="button"
                  className="btn btn-outline-success btn-sm float-right"
                >
                  <i className="fa fa-exclamation" />
                </button>

                <button
                  type="button"
                  className="btn btn-outline-danger btn-sm float-right"
                  onClick={() => handleItemDelete(item.id)}
                >
                  <i className="fa fa-trash-o" />
                </button>
              </span>
            </li>
          ))
        ) : (
          <div>No todos🤤</div>
        )}
      </ul>

      {/* Add form */}
      <div className="item-add-form d-flex">
        <input
          value={itemToAdd}
          type="text"
          className="form-control"
          placeholder="What needs to be done"
          onChange={handleChangeItem}
        />
        <button className="btn btn-outline-secondary" onClick={handleAddItem}>
          Add item
        </button>
      </div>
    </div>
  );
}

export default App;
