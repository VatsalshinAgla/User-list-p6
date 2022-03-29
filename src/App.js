import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import UserList from "./Components/UserList";
import { fetchUserdata } from "./redux/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserdata(1));
  }, []);

  return (
    <div className="App">
      <>
        <UserList />
      </>
    </div>
  );
}

export default App;
