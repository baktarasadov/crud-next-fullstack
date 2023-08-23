import React from "react";
import UserItem from "../userItem";
import style from "./userList.module.css";
import { UserType } from "@/types/userTypes";
interface UserListProps {
  data: UserType[];
  deleteUserById: (id: string) => void;
}
const UserList: React.FC<UserListProps> = ({ data, deleteUserById }) => {
  return (
    <React.Fragment>
      <div className={style.container}>
        {data.map((item, index) => (
          <UserItem
            deleteUserById={deleteUserById}
            name={item.name}
            id={item._id}
            key={`user ${index}`}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default UserList;
