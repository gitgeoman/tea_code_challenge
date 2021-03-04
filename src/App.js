import { useCallback, useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import UserList from "./components/UserList";
import SearchBox from "./components/SearchBox";

function App() {
  const [usersList, setUserList] = useState([]);
  const [searchField, setSearchField] = useState("");

  //fetching data from endpoint
  useEffect(() => {
    async function fetchData() {
      const fetchURL =
        "https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json";
      const request = await axios.get(fetchURL);
      // setting response && add property to an array of objects && sorting code with ES6
      const usersdata = request.data.sort((a, b) =>
        a.last_name.localeCompare(b.last_name)
      );
      setUserList(usersdata);
      return request;
    }
    fetchData();
  }, []);

  //toggle
  const toggleUserSelection = (event, id) => {
    const usersListUpdated = [...usersList];
    usersListUpdated[id] = { ...usersListUpdated[id] };
    usersListUpdated[id].selected = !usersListUpdated[id].selected;

    setUserList(usersListUpdated);
    console.log(
      usersListUpdated
        .filter(({ selected }) => {
          return selected;
        })
        .map((user) => user.id)
    );
  };

  //user filtering function with useCallback for minor performance improvement
  const filteredUsers = useCallback(
    usersList.filter(({ last_name, first_name }) => {
      return (
        last_name.toLowerCase().includes(searchField.toLocaleLowerCase()) ||
        first_name.toLowerCase().includes(searchField.toLocaleLowerCase())
      );
    })
  );

  return (
    <div className="app">
      {usersList.length === 0 ? (
        "Loading"
      ) : (
        <div className="app__userDashboard">
          <h1>Dashboard</h1>
          <SearchBox setSearchField={setSearchField} />
          <UserList
            users={filteredUsers}
            toggleUserSelection={toggleUserSelection}
          />
        </div>
      )}
    </div>
  );
}

export default App;
