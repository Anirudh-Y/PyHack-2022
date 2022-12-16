import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Home from "./components/home/Home";
import Main from "./components/main/Main";
import Audio from "./components/audio/Audio";

const PrivateCheck = ({ check }) => {

  return check ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate replace to="/" />
  );
};

function App() {
  const [check, setCheck] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<Main setCheck={setCheck} />} />
          <Route path="/audio-upload" element={<PrivateCheck check={check} />}>
            <Route path="/audio-upload" element={<Audio />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
