import axios from "axios";
import { useEffect, useState } from "react";
import SelectedUserCard from "./components/SelectedUserCard";
import UserCard from "./components/UserCard";
import "./App.css";
export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState(null);
  const [checkedList, setCheckedList] = useState([]);

  const onSelectedCardClick = (id) => {
    const selectedUser = checkedList.filter((user) => user.id !== id);
    setCheckedList(() => selectedUser);
    const newUsersList = users.map((el) =>
      el.id === id ? { ...el, isChecked: false } : el
    );
    setUsers(() => newUsersList);
  };

  const onCheckboxChange = (event, id) => {
    const newUsersList = users.map((el) =>
      el.id === id ? { ...el, isChecked: !el.isChecked } : el
    );
    setUsers(() => newUsersList);
    console.log(newUsersList);
    const filteredList = newUsersList.filter((user) => user.isChecked);
    setCheckedList(() => filteredList);
  };

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      const newShapedData = res.data.map((user) => ({
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone,
        isChecked: false,
      }));
      setIsLoading(false);
      setUsers(newShapedData);
    };
    getData();
  }, []);

  if (isLoading) {
    return (
      <div
        style={{ height: "50vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="App">
            <h4>Choose the user</h4>
            <div className="col-4">
              {users?.map((user) => (
                <UserCard
                  key={user.id}
                  user={user}
                  onCheckboxChange={onCheckboxChange}
                />
              ))}
            </div>
          </div>
          <div className="col-4 flex-md-row ">
            {checkedList.length <= 0 ? (
              <h4>No selected users!</h4>
            ) : (
              checkedList?.map((checkedUser) => (
                <SelectedUserCard
                  onSelectedCardClick={onSelectedCardClick}
                  key={checkedUser.id}
                  checkedUser={checkedUser}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
