import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Landing from "./pages/Landing.jsx";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([
    // {
    //   username: "John",
    //   password: "123",
    // }
  ]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Login users={users} />}></Route>
          <Route path={"/signup"} element={<Signup users={users} setUsers={setUsers} />}></Route>
          <Route path={"/landing"} element={<Landing />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;