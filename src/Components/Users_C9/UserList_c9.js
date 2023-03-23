import React from "react";
import Card from "../UI/Card/Card";
const UserListCC9 = (props) => {
  return (
    <Card className="col-md-6 mx-auto ">
      {(props.users === undefined ||
        props.users === null ||
        props.users.length === 0) && <p>User not exist</p>}
      <ul className="">
        {props.users &&
          props.users.map((x) => (
            <li className="p-2 " key={x.id}>
              <span>{x.name}</span> ( {x.age} years old )
              <i
                className="mx-4 btn btn-danger btn-sm circle"
                aria-hidden="true"
                onClick={() => {
                  props.onRemove(x.id);
                }}
              >
                del
              </i>
            </li>
          ))}
      </ul>
    </Card>
  );
};

export default UserListCC9;
