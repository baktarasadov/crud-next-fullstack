import React, { useEffect } from "react";
import style from "./userItem.module.css";
import { userItemPropsType } from "@/types/userTypes";

const UserItem: React.FC<userItemPropsType> = ({
  name,
  id,
  deleteUserById,
}) => {
  return (
    <React.Fragment>
      <ul className={style.main_container}>
        <li>{name}</li>
        <li>
          <ul>
            <li className={style.edit_button}>edit</li>
            <li
              className={style.delete_button}
              onClick={() => deleteUserById(id)}
            >
              delete
            </li>
          </ul>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default UserItem;
