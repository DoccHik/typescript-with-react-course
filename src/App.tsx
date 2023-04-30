import { useState, useEffect } from "react";
import Card, { CardVariant } from "./components/Card";
import UserList from "./components/UserList";
import { ITodo, IUser } from "./components/types/types";
import axios from "axios";
import List from "./components/List";
import UserItem from "./components/UserItem";
import TodoItem from "./components/TodoItem";

function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchUsers();
    fetchTodos();
  }, []);

  async function fetchUsers() {
    try {
      const responce = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(responce.data);
    } catch (e) {
      alert(e);
    }
  }

  async function fetchTodos() {
    try {
      const responce = await axios.get<ITodo[]>(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      setTodos(responce.data);
    } catch (e) {
      alert(e);
    }
  }

  // TODO: https://youtu.be/92qcfeWxtnY?t=1603

  return (
    <>
      <h1>React with TypeScript</h1>
      <hr />
      <h4 style={{ margin: "0px 0px 20px 0px" }}>
        Example: Card with TypeScript
      </h4>
      <Card
        onClick={(num) => alert(`Click on the card => ${num}`)}
        variant={CardVariant.primary}
        width="250px"
        height="200px"
      >
        <button>Это просто кнопка</button>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum,
          voluptatibus.
        </p>
      </Card>
      <hr />
      <h4 style={{ margin: "0px 0px 20px 0px" }}>
        Example: UserList with TypeScript
      </h4>
      <UserList users={users} />
      <h4 style={{ margin: "20px 0px 20px 0px" }}>
        Example: List with TypeScript
      </h4>
      <List
        items={users}
        renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
      />
      <hr />
      <h4 style={{ margin: "20px 0px 20px 0px" }}>
        Example: TodoList with TypeScript
      </h4>
      <List
        items={todos}
        renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
      />
    </>
  );
}

export default App;
