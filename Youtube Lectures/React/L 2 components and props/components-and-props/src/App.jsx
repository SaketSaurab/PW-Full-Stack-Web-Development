import "./App.css";
import UserCard from "./components/UserCard";
import users from "./components/data";

function App() {
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {users.map((user) => (
        <UserCard
          key={user.id}
          name={user.name}
          image={user.image}
          description={user.description}
        />
      ))}
    </div>
  );
}

export default App;
