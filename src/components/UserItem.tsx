import { FC } from "react";
import { IUser } from "./types/types";

interface IUserItemProps {
  user: IUser;
}

const UserItem: FC<IUserItemProps> = ({ user }) => {
  return (
    <>
      <div style={{ padding: 15, border: "1px solid #eee" }}>
        {user.id}. {user.name} проживает в городе: {user.address.city}, на улице{" "}
        {user.address.street}.
      </div>
    </>
  );
};

export default UserItem;
