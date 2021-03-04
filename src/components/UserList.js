import React from "react";
import User from "./User.js";

function UserList({ users, toggleUserSelection }) {
  return (
    <div className="userList">
      {users.map((user, index) => {
        return (
          <User
            key={index}
            id={user.id}
            avatar={user.avatar}
            first_name={user.first_name}
            last_name={user.last_name}
            selected={user.selected}
            toggleUserSelection={toggleUserSelection}
          />
        );
      })}
    </div>
  );
}

export default UserList;
