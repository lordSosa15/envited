// import logo from "./logo.svg";
import "./App.css";
// import { Landing, UrlBar, Button, Header } from "./components";
import { Route, Routes } from "react-router-dom";
import { Create, Event, Home } from "./pages";

function App() {
  return (
    <div className="App">
      {/* <Header />
      <Landing />
      <Button />
      <br />
      <UrlBar /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/event" element={<Event />} />
      </Routes>
    </div>
  );
}

export default App;
