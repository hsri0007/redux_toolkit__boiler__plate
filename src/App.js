import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./redux/slices/userReducer";
import "./styles.css";

export default function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getUser());
  }, []);
  console.log(user);
  return (
    <div className="App">
      <h1>{JSON.stringify(user.data.name)}</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
