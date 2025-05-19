import "./App.css";
import UserCard from "./components/UserCard";

import Shivaji from "./images/Shivaji.jpg";
import prithviraj from "./images/prithviraj.webp";

function App(props) {
  return (
    <div>
      <UserCard
        name="Shiva Ji"
        image={Shivaji}
        description="Shivaji Maharaj was a brave and visionary king who founded the Maratha Empire in India."
      />
      <UserCard
        name="Prithviraj Chauhan"
        image={prithviraj}
        description="Prithviraj Chauhan was a brave Rajput king known for his valor and resistance against invasions, especially in battles against Muhammad Ghori."
      />
    </div>
  );
}

export default App;
