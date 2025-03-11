import UserCard from "./assets/components/UserCard"
import "./app.css"
import Love from "./assets/Love.jpg"
import maharana from "./assets/MaharanaPratap.jpg"
import prithvi from "./assets/PrithviRajChauhan.jpg"

function App() {

  return (
    <div className="container">
    <UserCard name="Love Rana" desc="Description one" image={Love} style={{"border-radius":"10px"}}/>
    <UserCard name="Maharana Pratap" desc="Description two" image={maharana} style={{"border-radius":"10px"}}/>
    <UserCard name="PrithviRaj Chauhan" desc="Description three" image={prithvi} style={{"border-radius":"10px"}}/>
      
    </div>
  )
}

export default App
