import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  const count = useSelector((state) => state.counter.value);
  return <div>Navbar hai ye :{count}</div>;
};

export const HelloBro = ({ count1 }) => {
  return <div>Hello bro count: {count1}</div>;
};

export default Navbar;
