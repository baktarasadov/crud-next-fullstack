import React, { useState, ChangeEvent, FormEvent } from "react";
import style from "./newUser.module.css";
import { NewUserPropsType, UserData, UserType } from "@/types/userTypes";

const NewUser: React.FC<NewUserPropsType> = ({ userList, setUserList }) => {
  const [userData, setUserData] = useState<UserData>({
    name: "",
    surname: "",
    password: "",
    email: "",
    age: 0,
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    console.log(userData);

    try {
      const response = await fetch("http://localhost:3000/api/student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      if (response.ok) {
        const { data } = await response.json();

        const ok: UserType = {
          _id: data._id,
          name: data.name,
          surname: data.surname,
          email: data.email,
          password: data.password,
          age: data.age,
        };
        const array: UserType[] = [...userList, ok];
        setUserList(array);
        setUserData({
          name: "",
          surname: "",
          password: "",
          email: "",
          age: 0,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <React.Fragment>
      <div className={style.container}>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={userData.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="surname">Surname</label>
            <input
              type="text"
              id="surname"
              name="surname"
              value={userData.surname}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={userData.password}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              value={userData.age}
              onChange={handleInputChange}
            />
          </div>
          <button
            onClick={(event) => {
              handleSubmit(event);
            }}
            className={style.add}
          >
            ADD
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default NewUser;
