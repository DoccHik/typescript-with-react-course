import UserItem from "./UserItem";
import { IUser } from "./types/types";

interface IUserListProps {
  users: IUser[];
}
const UserList: React.FC<IUserListProps> = ({ users }) => {
  return (
    <>
      <div>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    </>
  );
};

export default UserList;
