import { Home, Favorites, Login, NewsDetail } from "./pages";
import "./styles.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import LoadingScreen  from "./components/LoadingScreen";
import { useSelector } from "react-redux";
import NavBar from "./components/NavBar"

function App() {
  const isLoading = useSelector((state) => state.isLoading);
  return (
    <HashRouter>
      <NavBar/>
      <Container>
        {isLoading && <LoadingScreen />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container> 
    </HashRouter> 
    
  );
}

export default App;