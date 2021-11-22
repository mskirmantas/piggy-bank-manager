import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <div className="lhs">
          <h1>Piggy Bank Manager</h1>
        </div>
        <div className="rhs">
          <p>Username</p>
          <p>Log Out</p>
        </div>
      </div>

      <div className="saved-amount">
        <h1>16,500 €</h1>
      </div>

      <div className="new-amount-input">
        <button>-</button>
        <input type="number" value=""></input>
        <button>+</button>
      </div>

      <div className="money-movement-history">
        <ul>
          <li>User added 100 €</li>
          <li>User added 50 €</li>
          <li>User removed 70 €</li>
          <li>User added 100 €</li>
          <li>User added 50 €</li>
          <li>User removed 70 €</li>
          <li>User added 100 €</li>
          <li>User added 50 €</li>
          <li>User removed 70 €</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
