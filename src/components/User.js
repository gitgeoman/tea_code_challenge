import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Checkbox from "@material-ui/core/Checkbox";
import "./User.css";

function User({
  id,
  avatar,
  first_name,
  last_name,
  selected,
  toggleUserSelection,
}) {
  return (
    <div className="user">
      <Avatar alt={last_name} src={avatar} />
      <h3>
        {first_name}, {last_name}
      </h3>
      <Checkbox
        checked={selected}
        onChange={(event) => toggleUserSelection(event, id)}
        inputProps={{ "aria-label": "primary checkbox" }}
      />
    </div>
  );
}

export default User;
