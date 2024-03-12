import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import "./css/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NoteState from "./Context/notes/NoteState";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  return (
    <>
      <NoteState>
        {/* <Layout> */}
        <Router>
          <Navbar />
          <Routes>

          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>

          </Routes>
        </Router>
        {/* </Layout> */}
      </NoteState>
    </>
  );
}

export default App;
