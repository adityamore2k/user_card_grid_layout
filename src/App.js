import "./styles.css";
import Navbar from "./components/Navbar.js";
import User from "./components/User";
import { useState, useEffect } from "react";

export default function App() {
  // useEffect hook to make HTTP request

  // Array of user objects
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://reqres.in/api/users?page=1")
      .then((response) => response.json())
      .then((data) => setUsers(data.data));
  }, []);

  const user_cards = users.map((user) => (
    <User
      avatar={user.avatar}
      first_name={user.first_name}
      last_name={user.last_name}
      email={user.email}
    />
  ));
  return (
    <div className="App">
      <Navbar />
      {user_cards}
    </div>
  );
}
