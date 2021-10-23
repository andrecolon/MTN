import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import thunk from "redux-thunk";
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import { selectUser } from "./features/userSlice";
import Login from "./Login";
import { auth } from "./firebase";
import { login, logout } from "./features/userSlice";
// https://youtu.be/zc1loX80TX8 < -- sauce
function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  //  uesEffect reason on timestamp - https://youtu.be/zc1loX80TX8?t=7638
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("user is ", authUser);
      if (authUser) {
        // user is logged in - grab from google api
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        // user logged out
        dispatch.apply(logout);
      }
    });
  }, [dispatch]);
  return (
    //BEM - naming convention method - scalable classes
    <div className="app">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
