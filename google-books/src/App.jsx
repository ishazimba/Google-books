import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import BookList from "./components/BookList";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/book_list" element={<BookList />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
