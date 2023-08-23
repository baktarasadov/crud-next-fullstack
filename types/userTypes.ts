export interface UserType {
    _id: string;
    name: string;
    surname: string;
    email: string;
    age: number;
    password: string;
}

export interface userItemPropsType {
    id: string;
    name: string;
    deleteUserById: (id: string) => void;
}

export interface UserData {
    name: string;
    surname: string;
    password: string;
    email: string;
    age: number;
}

export interface HeaderPropsType {
    setUserList: (user: UserType[]) => void;
    userList: UserType[]
}

export interface NewUserPropsType {
    setUserList: (user: UserType[]) => void;
    userList: UserType[]

}