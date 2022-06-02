import "./App.css";

// button-group
const buttons = [
  {
    name: "all",
    label: "All",
  },
  {
    name: "active",
    label: "Active",
  },
  {
    name: "done",
    label: "Done",
  },
];

function App() {
  return (
    <div className="todo-app">
      {/* App-header */}
      <div className="app-header d-flex">
        <h1>Todo List</h1>
        <h2>5 more to do, 3 done</h2>
      </div>

      <div className="top-panel d-flex">
        {/* Search-panel */}
        <input
          type="text"
          className="form-control search-input"
          placeholder="type to search"
        />
        {/* Item-status-filter */}
        <div className="btn-group">
          {/* Button group */}
          <button type="button" className="btn btn-info">
            All
          </button>
          <button type="button" className="btn btn-info btn-outline-secondary">
            Active
          </button>
          <button type="button" className="btn btn-info btn-outline-secondary">
            Done
          </button>
        </div>
      </div>

      {/* List-group */}
      <ul className="list-group todo-list">
        {/* simple item */}
        <li className="list-group-item">
          <span className="todo-list-item">
            <span className="todo-list-item-label">first Item</span>

            <button
              type="button"
              className="btn btn-outline-success btn-sm float-right"
            >
              <i className="fa fa-exclamation" />
            </button>

            <button
              type="button"
              className="btn btn-outline-danger btn-sm float-right"
            >
              <i className="fa fa-trash-o" />
            </button>
          </span>
        </li>

        {/* Important item */}
        <li className="list-group-item">
          <span className="todo-list-item important">
            <span className="todo-list-item-label">Important Item</span>

            <button
              type="button"
              className="btn btn-outline-success btn-sm float-right"
            >
              <i className="fa fa-exclamation" />
            </button>

            <button
              type="button"
              className="btn btn-outline-danger btn-sm float-right"
            >
              <i className="fa fa-trash-o" />
            </button>
          </span>
        </li>
      </ul>

      {/* Add form */}
      <form className="item-add-form d-flex">
        <input
          type="text"
          className="form-control"
          placeholder="What needs to be done"
        />
        <button className="btn btn-outline-secondary">Add item</button>
      </form>
    </div>
  );
}

export default App;
