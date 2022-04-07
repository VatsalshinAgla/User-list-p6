import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import UserList from "./Components/UserList";
import { fetchUserdata } from "./redux/actions";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserdata(1));
  }, []);

  return (
    <div className="App">
      <>
        <UserList />
        <ToastContainer />
      </>
    </div>
  );
}

export default App;
