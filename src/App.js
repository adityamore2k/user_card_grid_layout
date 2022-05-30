import "./styles.css";
import Navbar from "./components/Navbar.js";
import User from "./components/User";
import { useState, useEffect } from "react";

export default function App() {
  // useEffect hook to make HTTP request
  // Array of user objects
  const [users, setUsers] = useState([]);
  const [buttonClick, setButtonClick] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Logic to show loader icon
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    fetch("https://reqres.in/api/users?page=1")
      .then((response) => response.json())
      .then(function (data) {
        setUsers(data.data);
      });
  }, []);

  function returnUsers() {
    setButtonClick((prevVal) => !prevVal);
  }
  return (
    <div className="App">
      {/* <Navbar /> */}
      <button onClick={returnUsers}>Get users</button>
      {buttonClick ? (
        isLoading ? (
          <h1>Loading</h1>
        ) : (
          users.map((user) => (
            <User
              avatar={user.avatar}
              first_name={user.first_name}
              last_name={user.last_name}
              email={user.email}
            />
          ))
        )
      ) : (
        <h1>Click to see users</h1>
      )}
    </div>
  );
}
