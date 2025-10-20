import { useState } from "react";
import "./App.css";

const users = [
  "Ram",
  "Shyam",
  "Ravi",
  "Sumit",
  "Seeta",
  "Parvati",
  "Arjun",
  "Bheem",
  "Amit",
  "Sneha",
  "Priya",
  "Rohit",
  "Anjali",
  "Vikas",
  "Suresh",
  "Ramesh",
  "Kiran",
  "Pooja",
  "Neha",
  "Akash",
  "Nikhil",
  "Manish",
  "Deepak",
  "Sunita",
  "Kavita",
  "Arjun",
  "Shivam",
  "Aishwarya",
  "Meera",
  "Nisha",
  "Gaurav",
  "Harsh",
  "Vivek",
  "Varun",
  "Ritu",
  "Shweta",
  "Sanjay",
  "Prakash",
  "Bhavna",
  "Komal",
  "Sonal",
  "Isha",
  "Riya",
  "Tushar",
  "Mohit",
  "Pankaj",
  "Lokesh",
  "Mukesh",
  "Alok",
  "Yogesh",
  "Hemant",
  "Payal",
  "Rekha",
  "Umesh",
  "Chetan",
];

function App() {
  const [search, setSeach] = useState("");

  const filterUsers = users.filter((user) =>
    user.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <>
      <div>
        <h2>Filter Search App</h2>

        <input
          type="text"
          placeholder="Search user...."
          value={search}
          onChange={(e) => setSeach(e.target.value)}
        />

        <ul>
          {filterUsers.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
