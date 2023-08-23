import Image from "next/image";
import React, { useState } from "react";
import logo from "@/public/crud.png";
import style from "./header.module.css";
import NewUser from "../user/newUser";
import { GiCancel } from "react-icons/gi";
import { HeaderPropsType } from "@/types/userTypes";

const Header: React.FC<HeaderPropsType> = () => {
  const [click, setClick] = useState<boolean>(false);
  return (
    <React.Fragment>
      <header className={style.header_container}>
        <nav>
          <ul>
            <li>
              <Image
                width={80}
                style={{ borderRadius: "10px" }}
                alt="Logo"
                src={logo}
              />
            </li>
            <li>
              <input type="search" />
            </li>
            <li>
              {click ? (
                <div className={style.cancel}>
                  <GiCancel
                    onClick={() => {
                      setClick(false);
                    }}
                    size={40}
                  />
                </div>
              ) : (
                <button
                  onClick={() => {
                    setClick(true);
                  }}
                >
                  new user
                </button>
              )}

              {click && <NewUser />}
            </li>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Header;
