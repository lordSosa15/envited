// import logo from './logo.svg';
import Header from "./components/Header/Header";
import Landing from "./components/landing/Landing";
import Button from "./components/Button/Button";
import "./App.css";
import UrlBar from "./components/URLbar/Urlbar";
import Event from "./pages/Event";
import { Route, Routes } from "react-router-dom";
import CreateForm from "./pages/CreateForm";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <Button />
      <UrlBar />
      {/* <Routes>
        <Route path="create" element={<CreateForm />} />
        <Route path="event" element={<Event />} />
        <Route path="*" element={<NotFound />} />
      </Routes> */}
      <CreateForm/>
      <Event />
    </div>
  );
}

export default App;
