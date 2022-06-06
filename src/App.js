import { Home, Favorites, Login, NewsDetail } from "./pages";
import "./styles.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import LoadingScreen  from "./components/LoadingScreen";
import { useSelector } from "react-redux";
import Nav from "./components/Nav"

function App() {
  const isLoading = useSelector((state) => state.isLoading);
  return (
    <HashRouter>
      <Container>
        {isLoading && <LoadingScreen />}
        <Routes>
          <Route path="/" element={<><Nav /><Favorites /></>} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/favorites" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
    </HashRouter>
  );
}

export default App;