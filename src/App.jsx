import { useState } from "react";
import "./App.css";

function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userName === "user" && password === "password") {
      setMessage("Welcome, user!");
      setIsLoggedIn(true);
    } else {
      setMessage("Invalid username or password");
      setIsLoggedIn(false);
    }
  };

  return (
    <>
      <h1>Login Page</h1>
      {/* conditionally render the message above the input fields */}
      {message && <h4>{message}</h4>}

      {/* if the user is not logged in, show the form */}
      {!isLoggedIn && (
        <form onSubmit={handleSubmit}>
          <div id="username">
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              id="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div id="password">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </>
  );
}

export default App;
